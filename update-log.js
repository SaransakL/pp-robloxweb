const updateData = [
  {
    version: "v2025.7.3",
    changes: [
      "เพิ่ม HD Admin",
      "เปลี่ยนจาก Shift เป็น Ctrl เพื่อล็อกเมาส์บนคอมพิวเตอร์",
      "แก้ไขข้อผิดพลาด"
    ]
  },
  {
    version: "v2025.6.30",
    changes: [
      "เพิ่มระบบวิ่ง",
      "เพิ่มสิ่งก่อสร้าง",
      "แก้ไขข้อผิดพลาด"
    ]
  },
  {
    version: "v2025.7.5",
    changes: [
      "เพิ่มไอเทมใหม่ Megaphone (โทรโข่ง)"
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

// 🔧 แสดงรายการอัปเดตพร้อม animation
sortedData.forEach(entry => {
  const details = document.createElement('details');
  details.className = 'update-entry';

  const summary = document.createElement('summary');
  summary.textContent = entry.version;
  details.appendChild(summary);

  const contentDiv = document.createElement('div');
  const ul = document.createElement('ul');

  entry.changes.forEach(change => {
    const li = document.createElement('li');
    li.textContent = change;
    ul.appendChild(li);
  });

  contentDiv.appendChild(ul);
  details.appendChild(contentDiv);
  logSection.appendChild(details);
});
