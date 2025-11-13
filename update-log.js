const updateData = [
  {
    version: "v2025.11.11",
    changes: [
      "Nickin Anti-Cheat 2.0",
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.11.11 Part 2",
    changes: [
      "นำระบบ Nickin Anti-Cheat ออก",
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.11.12",
    changes: [
      "แก้ไขข้อผิดพลาด",
    ]
  },
  {
    version: "v2025.11.13",
    changes: [
      "นำระบบ Day/Night Cycle ออก",
      "ปรับระบบวิ่งบนมือถือ",
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
