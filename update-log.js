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
  }
];

const logSection = document.getElementById('update-log');

updateData.forEach(entry => {
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
