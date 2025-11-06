// test/beetle.integration.test.ts
import { describe, test, expect, beforeAll, afterEach, afterAll } from "vitest";
import supertest from "supertest";
import { app } from "../src/app"; // Express app
import { connect, closeDatabase, clearDatabase } from "./db-handler"; // DB handler
import { BeetleModel } from "../src/api/beetle/beetle.model";
import { mockBeetleData } from "./mock-data";

const request = supertest(app);

// --- Hooks จัดการฐานข้อมูล ---
beforeAll(async () => await connect(), 60000);
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

describe("🐛 /api/beetle Integration Tests", () => {
  // --- 1. Test POST /api/beetles (createBeetle) ---
  describe("POST /api/beetle (Create Beetle)", () => {
    test("1.1. Should create a new beetle and return 201", async () => {
      const response = await request.post("/api/beetle").send(mockBeetleData);

      expect(response.statusCode).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveProperty("_id");
      expect(response.body.data.name).toBe(mockBeetleData.name);

      // ตรวจสอบใน DB ว่าถูกบันทึกจริง
      const savedBeetle = await BeetleModel.findById(response.body.data._id);
      expect(savedBeetle).not.toBeNull();
    });

    test("1.2. Should return 400 if required fields are missing", async () => {
      const incompleteData = { name: "Missing Data Test" }; // ข้อมูลไม่ครบ
      const response = await request.post("/api/beetle").send(incompleteData);

      expect(response.statusCode).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain("required");
    });

    test("1.3. Should return 409 if beetle name already exists", async () => {
      // สร้าง Beetle ตัวแรก
      await BeetleModel.create(mockBeetleData);

      // พยายามสร้างตัวที่สองด้วยชื่อเดิม
      const response = await request.post("/api/beetle").send(mockBeetleData);

      expect(response.statusCode).toBe(409);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Beetle name already");
    });
  });

  // --- 2. Test GET /api/beetles (getBeetles) ---
  describe("GET /api/beetle (Get All Beetles)", () => {
    test("2.1. Should return 200 and an array of beetles when data exists", async () => {
      // สร้างข้อมูลตั้งต้น 2 ชิ้น
      await BeetleModel.create(mockBeetleData);
      await BeetleModel.create({
        ...mockBeetleData,
        name: "Goliath Beetle",
        scientificName: "Goliathus goliatus",
      });

      const response = await request.get("/api/beetle");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBe(2);
    });

    test("2.2. Should return 200 and an empty array if no beetles exist", async () => {
      // ฐานข้อมูลว่างเปล่าเนื่องจาก afterEach() ทำงาน
      const response = await request.get("/api/beetle");

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data).toEqual([]);
    });
  });

  describe("PUT /api/beetleซรก (Update Beetle)", () => {
    test("3.1 Should update beetle by id and return 200", async () => {
      const beetle = await BeetleModel.create(mockBeetleData);

      const updateData = { name: "Updated name" };

      const response = await request
        .put(`/api/beetle/${beetle._id}`)
        .send(updateData);

      expect(response.statusCode).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe("Updated name");

      const updated = await BeetleModel.findById(beetle._id);
      expect(updated?.name).toBe("Updated name");
    });

    test("3.2 Should return 404 if beetle id not found in database", async () => {
      await BeetleModel.create(mockBeetleData);

      const updateData = { name: "Updated name" };

      const response = await request
        .put(`/api/beetle/${"68aedd07efdf964e2de1ec59"}`)
        .send(updateData);

      expect(response.statusCode).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Beetle not found!");
    });
  });
});
