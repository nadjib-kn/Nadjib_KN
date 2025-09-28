const brthday = document.getElementById("brthDate");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

const today = new Date().toISOString().split("T")[0];
brthday.setAttribute("max", today);

btn.addEventListener("click", () => {
  let date = brthday.value;

  result.className = "";

  if (!date) {
    result.textContent = "⚠️ Please select your birth date.";
    result.classList.add("error", "show");
    return;
  }

  let brthd = new Date(date);
  let now = new Date();

  let y1 = brthd.getFullYear();
  let m1 = brthd.getMonth();
  let d1 = brthd.getDate();

  let y2 = now.getFullYear();
  let m2 = now.getMonth();
  let d2 = now.getDate();

  let y3 = y2 - y1;
  let m3, d3;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = m2 - m1 + 12;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = d2 - d1 + 30;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
  }

  let age = `🎉 Your age is <span style="color:#48dbfb">${y3}</span> years, 
             <span style="color:#48dbfb">${m3}</span> months, 
             and <span style="color:#48dbfb">${d3}</span> days old.`;

  result.innerHTML = age;
  result.classList.add("show");
});
