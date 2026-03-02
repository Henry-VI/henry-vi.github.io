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
      answer.innerText = `cat [file]        Open a link from ls.
cheatcode [code]  Enter a cheat code.
clear             Clears answer.
echo [string]     Prints a string.
exit              Returns to home.
help              Shows this page.
ls                Lists all links on the website.
reboot            Reloads the page.
      `
    } else if (current_prompt == "clear") {
      answer.innerText = ""
    } else if (current_prompt == "ls") {
      answer.innerHTML = `<a href="about.html">about.txt</a>  <a href="blog.html" style="color: salmon;">blog.md</a>    <a href="A Tale of Cheese.pdf">\`(Grade 5 Writing) A Tale of Cheese.pdf'</a>  <a href="guestbook.html"><span style="color: #00d800">guestbook</span>*</a>       <a href="/"><span style="color: #00d800">home.sh</span>*</a>
<a href="no-ai.html">no-ai.rtf</a>  <a href="notes.html">notes.txt</a>  <a href="https://ggx404.com" target="_blank" class="site">Webring/Chase</a>                             <a href="https://www.astro3000.dev" target="_blank" class="site">Webring/William</a>
<span style="color: darkgray; font-style: italic">Try clicking the files!</span>`
    } else if (current_prompt == "toki") {
      answer.innerHTML = "<a href='tok.html' style='color: #0175e5'>toki! (lipu majuna)</a>"
    } else if (current_prompt == "exit") {
      window.location.href = "/"
    } else if (current_prompt == "sudo rm -rf /" || current_prompt == "rm -rf /" || current_prompt == "rm -rf --no-preserve-root /" || current_prompt == "sudo rm -rf --no-preserve-root /") {
      window.location.replace("about:blank")
    } else if (current_prompt == "reboot") {
      window.location.reload()
    } else if (current_prompt.slice(0,4) == "echo") {
      answer.innerText = current_prompt.slice(5)
    } else if (current_prompt == "home.sh" || current_prompt == "./home.sh") {
      window.location.href = "/"
    } else if (current_prompt.slice(0,3) == "cat") {
      switch (current_prompt.slice(4).toLowerCase()) {
        case "home.sh":
          window.location.href = "/"
          break;
        case "about.txt":
          window.location.href = "about.html"
          break;
        case "'(grade 5 writing) a tale of cheese.pdf'":
          window.location.href = "A Tale of Cheese.pdf"
          break;
        case "guestbook.html":
          window.location.href = "guestbook.html"
          break;
        case "blog.md":
          window.location.href = "blog.html"
          break;
        case "no-ai.rtf":
          window.location.href = "no-ai.html"
          break;
        case "webring/chase":
          window.location.href = "https://ggx404.com"
          break;
        case "webring/william":
          window.location.href = "https://www.astro3000.dev"
          break;
        case "notes.txt":
          window.location.href = "notes.html"
        default:
          answer.innerText = `cat: ${current_prompt.slice(4).split()[0]}: No such file or directory`
          break;
      }
    } else if (current_prompt.slice(0,9) == "cheatcode") {
      switch (current_prompt.slice(10).toLowerCase()) {
        case "codes":
          answer.innerHTML = `codes
gavriil
indieweb
marquee
skelebones
tokipona`
          break;
        case "marquee":
          answer.innerHTML = "<marquee>whee</marquee>"
          break;
        case "gavriil":
          answer.innerHTML = "\"wheres your IBM PC BIOS specifications manual?\""
          break;
        case "indieweb":
          answer.innerHTML = "<marquee direction='right'>I love the indie web!!!</marquee><br><img src='https://web.archive.org/web/20090803200643im_/http://www.geocities.com/SiliconValley/Pines/9258/skull1_anim.gif'> RAAAAAAH <img src='https://web.archive.org/web/20090803200643im_/http://www.geocities.com/SiliconValley/Pines/9258/skull1_anim.gif'><br><a href='https://henryvaniersel.ca' target='_blank'><img src='button.gif' width=100 alt='button for henryvaniersel.ca'></a>"
          break;
        case "skelebones":
          answer.innerHTML = "<img src='https://blob.gifcities.org/gifcities/25GEJMY4IWCJRCUAOTLD537VG7SBNK36.gif'>"
          break;
        case "tokipona":
          document.getElementById("para").innerHTML = `toki a! o kama pona tawa lipu mi.
sina wile sona mute la sina ken alasa toki e "ls" anu "help" lon poki toki anpa.
<b>ilo suli taso. sina kepeken ilo lili la lipu li kama pakala.
o kepeken taso e ilo suli.</b>`
          document.getElementById("cubesub").innerText = "leko tawa"
          answer.innerText = "pona a!"
          break;
        default:
          answer.innerHTML = "nope"
          break;
      }
    } else {
      answer.innerText = `sh: ${current_prompt}: command not found.`
    }
  }
}
