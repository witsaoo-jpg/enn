// ไฟล์ data.js - เก็บข้อมูล Master Data โรคทั้งหมด
const initialMasterData = [
    // --- 1. กลุ่มทั่วไป/สุขสบาย (General) ---
    {
      "id": "G001", "category": "ทั่วไป/สุขสบาย (General)", "nanda": "Self-Care Deficit: Bathing", "keywords": ["อาบน้ำ", "เช็ดตัว", "care"],
      "template": { "d": "S: บ่นเหนื่อย อ่อนเพลีย อาบน้ำเองไม่ได้\nO: ร่างกายสกปรก, Motor power grade...", "a": "1. เช็ดตัว (Bed bath)\n2. เปลี่ยนเสื้อผ้า/ผ้าปู\n3. ทาโลชั่น", "r": "ร่างกายสะอาด สุขสบาย" }
    },
    {
      "id": "G003", "category": "ทั่วไป/สุขสบาย (General)", "nanda": "Chronic Pain", "keywords": ["ปวดเรื้อรัง", "ปวดหลัง", "pain"],
      "template": { "d": "S: บ่นปวดตึง... เป็นมานาน > 3 เดือน Pain score .../10", "a": "1. ประเมินความปวด\n2. ให้ยาแก้ปวดตามแผน\n3. จัดท่าสุขสบาย", "r": "ปวดทุเลาลง พักผ่อนได้" }
    },
    {
        "id": "G006", "category": "ทั่วไป/สุขสบาย (General)", "nanda": "Acute Headache", "keywords": ["ปวดหัว", "ไมเกรน", "headache"],
        "template": { "d": "S: ปวดศีรษะตุบๆ Pain Score .../10\nO: คิ้วขมวด, BP สูง", "a": "1. วัด V/S\n2. ให้นอนพักในที่เงียบ\n3. ให้ยา Paracetamol", "r": "ปวดลดลง สีหน้าสดชื่นขึ้น" }
    },
  
    // --- 2. ระบบหายใจ (Respiratory) ---
    {
      "id": "R001", "category": "ระบบหายใจ (Respiratory)", "nanda": "Ineffective Airway Clearance", "keywords": ["เสมหะ", "ไอ", "sputum", "suction"],
      "template": { "d": "S: ไอมีเสมหะ ขับออกยาก\nO: ฟังปอดมีเสียง Rhonchi/Crepitation", "a": "1. จัดท่านอนศีรษะสูง\n2. เคาะปอด/Suction\n3. พ่นยาตามแผน", "r": "เสมหะลดลง ปอด Clear ขึ้น" }
    },
    {
      "id": "R002", "category": "ระบบหายใจ (Respiratory)", "nanda": "Ineffective Breathing Pattern", "keywords": ["หอบ", "หายใจเร็ว", "dyspnea"],
      "template": { "d": "S: เหนื่อยหอบ แน่นหน้าอก\nO: RR > 24/min, ปีกจมูกบาน", "a": "1. วัด V/S\n2. ให้ออกซิเจน Cannula/Mask\n3. ดูแลพักบนเตียง", "r": "RR ลดลง ไม่หอบเหนื่อย" }
    },
    {
        "id": "R003", "category": "ระบบหายใจ (Respiratory)", "nanda": "Impaired Gas Exchange", "keywords": ["O2 drop", "hypoxia", "เขียว", "desat"],
        "template": { "d": "O: ปลายมือปลายเท้าเขียว, SpO2 < 90%", "a": "1. ให้ออกซิเจน Maintain SpO2 > 95%\n2. Monitor O2 Sat ต่อเนื่อง", "r": "SpO2 > 95% ไม่มีอาการเขียว" }
    },
  
    // --- 3. ระบบหัวใจ/หลอดเลือด (Cardiovascular) ---
    {
      "id": "C002", "category": "ระบบหัวใจ/หลอดเลือด (Cardiovascular)", "nanda": "Acute Pain: Chest Pain", "keywords": ["เจ็บหน้าอก", "แน่นหน้าอก", "angina"],
      "template": { "d": "S: เจ็บแน่นหน้าอกร้าวไปกราม Pain .../10\nO: เหงื่อแตก, EKG มี ST Change", "a": "1. ทำ EKG 12 leads\n2. อมยาใต้ลิ้น/Morphine ตามแผน\n3. Bed rest", "r": "เจ็บหน้าอกทุเลา EKG ไม่แย่ลง" }
    },
    {
      "id": "C003", "category": "ระบบหัวใจ/หลอดเลือด (Cardiovascular)", "nanda": "Fluid Volume Excess (CHF)", "keywords": ["น้ำเกิน", "บวม", "heart failure", "เหนื่อย"],
      "template": { "d": "S: นอนราบไม่ได้ เหนื่อย\nO: ขาบวม Pitting edema, ฟังปอดมี Crepitation", "a": "1. จัดท่านั่งศีรษะสูง\n2. จำกัดน้ำ/เค็ม\n3. ให้ยาขับปัสสาวะ", "r": "บวมลดลง หายใจสะดวกขึ้น" }
    },
    {
        "id": "C006", "category": "ระบบหัวใจ/หลอดเลือด (Cardiovascular)", "nanda": "Hypertension", "keywords": ["ความดันสูง", "HT", "ปวดท้ายทอย"],
        "template": { "d": "S: ปวดมึนท้ายทอย\nO: BP สูง > 140/90", "a": "1. ให้นอนพักผ่อน\n2. วัด BP ซ้ำทุก 15 นาที\n3. ให้ยาลดความดัน", "r": "BP ลดลง ปวดศีรษะทุเลา" }
    },
  
    // --- 4. ระบบทางเดินอาหาร (GI) ---
    {
      "id": "GI001", "category": "ระบบทางเดินอาหาร (GI)", "nanda": "Acute Abdominal Pain", "keywords": ["ปวดท้อง", "จุกเสียด", "colic"],
      "template": { "d": "S: ปวดจุกแน่นท้อง Pain .../10\nO: กดเจ็บ, ท้องอืด", "a": "1. ประเมินอาการปวด\n2. ให้ยาแก้ปวด/ขับลม\n3. งดน้ำงดอาหาร (ถ้าจำเป็น)", "r": "ปวดท้องลดลง ท้องนิ่ม" }
    },
    {
      "id": "GI002", "category": "ระบบทางเดินอาหาร (GI)", "nanda": "Diarrhea", "keywords": ["ท้องเสีย", "ถ่ายเหลว"],
      "template": { "d": "S: ถ่ายเหลว ... ครั้ง\nO: อุจจาระเป็นน้ำ, เพลีย", "a": "1. ให้จิบ ORS\n2. สังเกตลักษณะอุจจาระ\n3. ดูแลผิวหนังรอบก้น", "r": "ถ่ายลดลง ไม่เพลีย" }
    },
  
    // --- 5. ศัลยกรรม/แผล (Surgical) ---
    {
      "id": "S001", "category": "ศัลยกรรม/แผล (Surgical)", "nanda": "Acute Pain (Post-op)", "keywords": ["ปวดแผล", "ผ่าตัด", "post-op"],
      "template": { "d": "S: ปวดแผลผ่าตัด Pain .../10\nO: ขยับตัวลำบาก, สีหน้าเจ็บปวด", "a": "1. ประเมินแผล\n2. ให้ยาแก้ปวดตามแผน\n3. จัดท่าสุขสบาย", "r": "Pain Score ลดลง พักผ่อนได้" }
    },
    {
      "id": "S002", "category": "ศัลยกรรม/แผล (Surgical)", "nanda": "Impaired Skin Integrity (Wound)", "keywords": ["ทำแผล", "แผลผ่าตัด", "dressing"],
      "template": { "d": "O: มีแผลผ่าตัดบริเวณ... แผลแห้งดี/มีซึม", "a": "1. ทำแผล Sterile technique\n2. สังเกตอาการติดเชื้อ", "r": "แผลสะอาด ไม่บวมแดง" }
    },
    {
        "id": "S003", "category": "ศัลยกรรม/แผล (Surgical)", "nanda": "Risk for Infection: Surgical Site", "keywords": ["ติดเชื้อ", "แผลบวม", "หนอง"],
        "template": { "d": "O: มีแผลผ่าตัด, มีสาย Drain", "a": "1. ดูแลแผลให้แห้ง\n2. ให้ยาฆ่าเชื้อตามแผน\n3. สังเกตลักษณะหนอง", "r": "ไม่มีไข้ แผลไม่อักเสบ" }
    },

    // --- 6. ระบบประสาท/จิตใจ (Neuro/Psych) ---
    {
        "id": "NP001", "category": "ระบบประสาท/จิตใจ (Neuro/Psych)", "nanda": "Ineffective Cerebral Tissue Perfusion (Stroke)", "keywords": ["stroke", "ปากเบี้ยว", "อ่อนแรง"],
        "template": { "d": "O: แขนขาซีก...อ่อนแรง, พูดไม่ชัด, GCS...", "a": "1. Monitor Neuro Signs\n2. ดูแลทางเดินหายใจ\n3. จัดท่าศีรษะสูง 30 องศา", "r": "GCS ไม่ลดลง สัญญาณชีพปกติ" }
    },
    {
        "id": "NP003", "category": "ระบบประสาท/จิตใจ (Neuro/Psych)", "nanda": "Acute Confusion (Delirium)", "keywords": ["สับสน", "จำไม่ได้", "เพ้อ"],
        "template": { "d": "S: พูดจาสับสน จำญาติไม่ได้\nO: Disoriented, กระสับกระส่าย", "a": "1. Reorient (บอกวันเวลาสถานที่)\n2. ให้ญาติเฝ้า\n3. ระวังอุบัติเหตุ", "r": "สงบลง สื่อสารรู้เรื่องขึ้น" }
    },

    // --- 7. ความปลอดภัย (Safety) ---
    {
        "id": "SA001", "category": "ความปลอดภัย (Safety)", "nanda": "Risk for Falls", "keywords": ["ล้ม", "ตกเตียง", "fall risk"],
        "template": { "d": "O: อายุมาก, อ่อนเพลีย, Fall risk score สูง", "a": "1. ยกไม้กั้นเตียง\n2. ให้ญาติ/จนท.ช่วยพยุงเดิน\n3. ติดป้ายเฝ้าระวัง", "r": "ไม่เกิดอุบัติเหตุพลัดตกหกล้ม" }
    },
    {
        "id": "SA003", "category": "ความปลอดภัย (Safety)", "nanda": "Risk for Pressure Injury", "keywords": ["แผลกดทับ", "bed sore", "แดง"],
        "template": { "d": "O: นอนติดเตียง, Braden score ต่ำ", "a": "1. พลิกตัวทุก 2 ชม.\n2. ใช้ที่นอนลม\n3. ดูแลผิวหนังให้แห้งสะอาด", "r": "ไม่เกิดแผลกดทับเพิ่ม ผิวไม่แดง" }
    }
    // *** คุณสามารถก๊อปปี้ JSON ชุดใหญ่ที่ผมให้ก่อนหน้านี้มาต่อท้ายตรงนี้ได้เลยครับ ***
  ];