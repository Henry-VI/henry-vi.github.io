document.onkeydown = (e) => {
  if (e.key.length === 1) {
    e.preventDefault();
    document.getElementById("prompt").textContent += e.key;
  }
  if (e.key === "Backspace" && document.getElementById("prompt").textContent.length > 8) {
    e.preventDefault();
    document.getElementById("prompt").textContent = document.getElementById("prompt").textContent.slice(0, -1);
  }
  if (e.key === "Enter") {
    // AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
    e.preventDefault();
    const answer = document.getElementById("answer")
    const current_prompt = document.getElementById("prompt").textContent.slice(8)
    document.getElementById("prompt").textContent = "sh-5.3$ "
    if (current_prompt == "help") {
      answer.innerText = `clear         Clears answer.
exit          Returns to home.
help          Shows this page.
ls            Lists all links on the website.
      `
    } else if (current_prompt == "clear") {
      answer.innerText = ""
    } else if (current_prompt == "ls") {
      answer.innerHTML = `<a href="about.html">about.txt</a>      <a href="A Tale of Cheese.pdf">'(Grade 5 Writing) A Tale of Cheese.pdf'</a>  <a href="chatroom.html"><span style="color: #00d800">chatroom</span>*</a>  <a href="http://154.20.143.195" target="_blank" class="site">Friend/Gavriil</a>
<a href="https://ggx404.com" target="_blank" class="site">Friend/GGX404</a>  <span style="color: salmon">More coming soon</span>
<span style="color: darkgray; font-style: italic">Try clicking the files!</span>`
    } else if (current_prompt == "toki") {
      answer.innerHTML = "<a href='tok.html' style='color: #0175e5'>toki! (lipu majuna)</a>"
    } else if (current_prompt == "exit") {
      window.location.href = "/"
    } else if (current_prompt == "sudo rm -rf /" || current_prompt == "rm -rf /" || current_prompt == "rm -rf --no-preserve-root /" || current_prompt == "sudo rm -rf --no-preserve-root /") {
      window.location.replace("about:blank")
    } else {
      answer.innerText = `sh: ${current_prompt}: command not found.`
    }
  }
}
