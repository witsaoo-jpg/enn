// ไฟล์ data.js
const initialMasterData = [
    // --- 1. กลุ่มทั่วไป/สุขสบาย (General) ---
    {
      "id": "G001", "category": "ทั่วไป/สุขสบาย (General)", "nanda": "Self-Care Deficit: Bathing", "keywords": ["อาบน้ำ", "เช็ดตัว", "care"],
      "template": { "d": "S: บ่นเหนื่อย อาบน้ำเองไม่ได้\nO: ร่างกายสกปรก", "a": "1. เช็ดตัว (Bed bath)\n2. เปลี่ยนเสื้อผ้า", "r": "ร่างกายสะอาด สุขสบาย" }
    },
    {
      "id": "G006", "category": "ทั่วไป/สุขสบาย (General)", "nanda": "Acute Pain", "keywords": ["ปวดหัว", "ปวดตัว", "pain"],
      "template": { "d": "S: ปวดศีรษะ Pain Score .../10", "a": "1. ประเมินความปวด\n2. ให้ยาพาราเซตามอล", "r": "อาการปวดทุเลา" }
    },

    // --- 2. ระบบหายใจ (Respiratory) ---
    {
      "id": "R001", "category": "ระบบหายใจ (Respiratory)", "nanda": "Ineffective Airway Clearance", "keywords": ["เสมหะ", "ไอ", "suction"],
      "template": { "d": "S: ไอมีเสมหะ ขับออกยาก\nO: ฟังปอดมีเสียง Rhonchi", "a": "1. จัดท่าศีรษะสูง\n2. Suction\n3. พ่นยา", "r": "เสมหะลดลง ปอด Clear" }
    },
    {
        "id": "R003", "category": "ระบบหายใจ (Respiratory)", "nanda": "Impaired Gas Exchange", "keywords": ["O2 drop", "hypoxia", "เขียว"],
        "template": { "d": "O: SpO2 < 90%, ปลายมือเขียว", "a": "1. ให้ออกซิเจน\n2. Monitor O2 Sat", "r": "SpO2 > 95% ไม่มีอาการเขียว" }
    },

    // --- 3. ระบบหัวใจ (Cardiovascular) ---
    {
      "id": "C002", "category": "ระบบหัวใจ/หลอดเลือด (Cardiovascular)", "nanda": "Acute Pain: Chest Pain", "keywords": ["เจ็บหน้าอก", "แน่นหน้าอก"],
      "template": { "d": "S: เจ็บแน่นหน้าอกร้าวไปกราม\nO: เหงื่อแตก, EKG ST Elevation", "a": "1. ทำ EKG 12 leads\n2. อมยาใต้ลิ้น", "r": "เจ็บหน้าอกทุเลา" }
    },

    // --- 4. ระบบทางเดินอาหาร (GI) ---
    {
      "id": "GI001", "category": "ระบบทางเดินอาหาร (GI)", "nanda": "Acute Abdominal Pain", "keywords": ["ปวดท้อง", "จุกเสียด"],
      "template": { "d": "S: ปวดจุกแน่นท้อง\nO: กดเจ็บ ท้องอืด", "a": "1. ให้ยาแก้ปวด/ขับลม\n2. งดน้ำงดอาหาร", "r": "ปวดท้องลดลง" }
    },

    // --- 5. ศัลยกรรม (Surgical) ---
    {
      "id": "S001", "category": "ศัลยกรรม/แผล (Surgical)", "nanda": "Acute Pain (Post-op)", "keywords": ["ปวดแผล", "ผ่าตัด"],
      "template": { "d": "S: ปวดแผลผ่าตัด Pain .../10", "a": "1. ดูแลแผล\n2. ให้ยาแก้ปวด", "r": "Pain Score ลดลง" }
    },
    {
        "id": "S003", "category": "ศัลยกรรม/แผล (Surgical)", "nanda": "Risk for Infection", "keywords": ["ติดเชื้อ", "แผลบวม", "หนอง"],
        "template": { "d": "O: มีแผลผ่าตัด", "a": "1. ทำแผล Sterile technique", "r": "แผลแห้งดี ไม่บวมแดง" }
    },

    // --- 6. ระบบประสาท (Neuro) ---
    {
        "id": "NP001", "category": "ระบบประสาท/จิตใจ (Neuro/Psych)", "nanda": "Ineffective Cerebral Tissue Perfusion", "keywords": ["stroke", "ปากเบี้ยว", "อ่อนแรง"],
        "template": { "d": "O: แขนขาอ่อนแรง, พูดไม่ชัด", "a": "1. Monitor Neuro Signs\n2. จัดท่าศีรษะสูง", "r": "GCS ไม่ลดลง" }
    },

    // --- 7. ความปลอดภัย (Safety) ---
    {
        "id": "SA001", "category": "ความปลอดภัย (Safety)", "nanda": "Risk for Falls", "keywords": ["ล้ม", "ตกเตียง"],
        "template": { "d": "O: อายุมาก, อ่อนเพลีย", "a": "1. ยกไม้กั้นเตียง\n2. เฝ้าระวังการพลัดตกหกล้ม", "r": "ไม่เกิดอุบัติเหตุ" }
    },

    // --- 8. กระดูกและกล้ามเนื้อ (Orthopedic) ---
    {
      "id": "OR001", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Impaired Physical Mobility (Fracture/Cast)", 
      "keywords": ["กระดูกหัก", "ใส่เฝือก", "เดินไม่ได้", "fracture"],
      "template": { 
        "d": "O: กระดูกขาหัก, ใส่เฝือก, ขยับเองไม่ได้", 
        "a": "1. พลิกตัวทุก 2 ชม.\n2. ยกอวัยวะให้สูง (Elevate)\n3. สอนเกร็งกล้ามเนื้อ (Isometric exercise)", 
        "r": "ไม่เกิดแผลกดทับ, ปลายเท้าไม่บวม" 
      }
    },
    {
      "id": "OR002", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Acute Pain (Fracture)", 
      "keywords": ["ปวดกระดูก", "ปวดขา", "อุบัติเหตุ"],
      "template": { 
        "d": "S: ปวดบริเวณที่หัก Pain score .../10", 
        "a": "1. ประเมิน Neurovascular sign\n2. ให้ยาแก้ปวด\n3. จัดนิ่งอวัยวะ (Immobilize)", 
        "r": "Pain score ลดลง, ชีพจรส่วนปลายเต้นดี" 
      }
    },
    {
      "id": "OR003", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Risk for Compartment Syndrome", 
      "keywords": ["ปวดตึง", "เฝือกแน่น", "compartment", "ชา"],
      "template": { 
        "d": "S: ปวดตึงในเฝือกมาก กินยาไม่หาย\nO: ปลายมือ/เท้า เย็น ซีด, ชีพจรเบา", 
        "a": "1. คลายเฝือกทันทีและแจ้งแพทย์\n2. ยกอวัยวะระดับหัวใจ\n3. ประเมิน 5P", 
        "r": "อาการปวดทุเลา, ปลายมือแดงอุ่น" 
      }
    },
    {
      "id": "OR004", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Risk for Peripheral Neurovascular Dysfunction", 
      "keywords": ["ชา", "นิ้วม่วง", "เลือดไม่เดิน"],
      "template": { 
        "d": "O: ใส่เฝือกแน่น, ปลายนิ้วเริ่มม่วงคล้ำ", 
        "a": "1. ตรวจสอบ Capillary refill\n2. กระตุ้นขยับปลายนิ้ว", 
        "r": "ปลายประสาททำงานปกติ, ไม่ชา" 
      }
    },
    {
      "id": "OR005", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Risk for Infection: Pin Site", 
      "keywords": ["ติดเชื้อ", "กระดูกโผล่", "pin site", "เหล็กยึด"],
      "template": { 
        "d": "O: มีเหล็กยึดตรึงภายนอก (External Fixator)", 
        "a": "1. ทำแผล Pin site วันละ 1-2 ครั้ง\n2. สังเกตอาการบวมแดง/หนอง", 
        "r": "แผลแห้งดี, ไม่มีหนอง" 
      }
    },
    {
      "id": "OR006", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Impaired Physical Mobility (Traction)", 
      "keywords": ["ดึงกระดูก", "traction", "skeletal"],
      "template": { 
        "d": "O: นอนติดเตียง On Skeletal Traction ถ่วงน้ำหนัก", 
        "a": "1. ดูแลเชือกให้อยู่ในรอก\n2. ตุ้มน้ำหนักลอยอิสระเสมอ\n3. ดูแลความสะอาดหลังและก้น", 
        "r": "อุปกรณ์ Traction ทำงานดี, ไม่เกิดแผลกดทับ" 
      }
    },
    {
      "id": "OR009", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Risk for Falls (Post-Ortho Surgery)", 
      "keywords": ["ล้ม", "หัดเดิน", "walker"],
      "template": { 
        "d": "O: หลังผ่าตัดเปลี่ยนข้อ, เริ่มหัดเดิน", 
        "a": "1. ประเมินการทรงตัว\n2. สอนใช้อุปกรณ์ Walker\n3. มีจนท.ดูแลขณะฝึกเดิน", 
        "r": "ไม่เกิดอุบัติเหตุหกล้ม" 
      }
    },
    {
      "id": "OR010", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Deficient Knowledge: Cast Care", 
      "keywords": ["ดูแลเฝือก", "เฝือกเปียก", "คัน"],
      "template": { 
        "d": "S: ถามวิธีดูแลเฝือก\nO: ใส่เฝือกกลับบ้าน", 
        "a": "1. ห้ามเฝือกเปียกน้ำ\n2. ห้ามใช้ไม้เกาในเฝือก", 
        "r": "ผู้ป่วยเข้าใจวิธีดูแลเฝือก" 
      }
    },
    {
      "id": "OR013", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Impaired Physical Mobility (Amputation)", 
      "keywords": ["ตัดขา", "amputation", "stump"],
      "template": { 
        "d": "O: หลังผ่าตัดตัดขา, เคลื่อนไหวลำบาก", 
        "a": "1. พันตอขา (Stump bandaging)\n2. ฝึกความแข็งแรงแขนขาข้างดี", 
        "r": "ตอขาไม่บวม, ข้อสะโพกไม่ติด" 
      }
    },
    {
      "id": "OR015", 
      "category": "กระดูกและกล้ามเนื้อ (Orthopedic)", 
      "nanda": "Risk for Dislocation (Hip Replacement)", 
      "keywords": ["ข้อหลุด", "ผ่าตัดสะโพก", "หมอนสามเหลี่ยม"],
      "template": { 
        "d": "O: หลังผ่าตัดเปลี่ยนข้อสะโพกเทียม", 
        "a": "1. ใส่หมอนสามเหลี่ยมระหว่างขา\n2. ห้ามไขว่ห้าง ห้ามงอสะโพก > 90 องศา", 
        "r": "ข้อสะโพกไม่หลุด, ขายาวเท่ากัน" 
      }
    }

]; // <--- ปิดท้ายไฟล์ ตรงนี้สำคัญมาก!
