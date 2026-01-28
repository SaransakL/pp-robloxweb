const updateData = [
  {
    version: "v2025.11.17",
    changes: [
      "เพิ่มหน้าเมนู",
      "ระบบโทรศัพท์แบบใหม่",
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.11.30",
    changes: [
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.12.07",
    changes: [
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.12.23",
    changes: [
      "สิ่งก่อสร้างใหม่",
    ]
  },
  {
    version: "v2026.01.18",
    changes: [
      "สิ่งก่อสร้างใหม่",
      "แก้ไขข้อผิดพลาด",
    ]
  }
];

const logSection = document.getElementById('update-log');

// 🔁 จัดเรียงตามเวอร์ชันแบบตัวเลข (ใหม่ → เก่า)
const sortedData = updateData.sort((a, b) => {
  const parseVersion = (v) => v.replace("v", "").split('.').map(Number);
  const [ay, am, ad] = parseVersion(a.version);
  const [by, bm, bd] = parseVersion(b.version);

  if (ay !== by) return by - ay;
  if (am !== bm) return bm - am;
  return bd - ad;
});

sortedData.forEach(entry => {
  const details = document.createElement('details');
  details.className = 'update-entry';

  const summary = document.createElement('summary');
  summary.textContent = entry.version;
  details.appendChild(summary);

  const ul = document.createElement('ul');
  entry.changes.forEach(change => {
    const li = document.createElement('li');
    li.textContent = change;
    ul.appendChild(li);
  });

  details.appendChild(ul);
  logSection.appendChild(details);
});
