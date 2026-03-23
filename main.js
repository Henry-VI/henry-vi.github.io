let time = 0
let mins = 0 
let secs = 0
let hours = 0

let splash_text = ["o toki e toki pona!", "sudo rm -rf --no-preserve-root /", "i use arch btw!", "open source!", "rabble rabble privacy rabble rabble!", "something something digital footprint something something!", "o kalamawala!", "also try dottwav.neocities.org!", "#1 death hater!", "10 PRINT \"HELLO\"<br>20 GOTO 10!", "Elon Musk has a net worth of over $800,000,000,000!", "I ♥ text art!", "release the Epstein files!", "<span style='animation: spin 1s linear infinite; display: inline-block;'>spinning pixels!</span>", "No AI!", "also try touching grass!", "insert splash text here!", "war isn't murder, they're call casualties!", "Dirty commie rat!", "be more prepared for the next insurrection!", "death to DST!", "I'm a socialist      but like a chill one!", "it's a democratic hoax, folks, have you even seen the DOW?", "Indie web!", "Hitler was a bad person!", "cheatcode marquee", "null", "this reminds me of 1984!", "built with a 1970s mainframe!", "I  ♥ Terry Davis!", "Compatible with TempleOS!", "The revolution will not be televised!", "CrazyCattle3D!", "Hello internet, welcome to Game Theory!", "Free Palestine!", "We seem to spend so much time living in someone else's nostalgia.", "Overhead, without any fuss, the stars were going out.", "it's extremely illegal to say...", "Unhireable!", "Fascism is not to be debated, it is to be destroyed!", "First they came for the ... and I did not speak out.", "Stay gold, Ponyboy!", "print(\"Hello, World!\")", "also try 108.172.111.237!", "inconsistently styled!", "Subscribe to my newsletter!", "Keyboard-optimised!", "Tested on Firefox-based browsers!", "<span style='font-family: \"Comic Sans MS\"'>Consistent font usage!</span>", "BC: The best place on Earth!", "Elbows Up!", "Human-made!", "Powered by both my brain cells!", "Powered by Linux!", "Powered by Neovim!", "Powered by Arch!", "Powered by sleep deprivation!", "Powered by HTML!", "Powered by blue jeans!", "Powered by black hoodies!", "No one left to kill in the sky!", "WW2 Censor!", "No one left to kill in the sky!", "Waiting for the Great Leap Forwards!", "Melt ICE!", "████████ ████████ bill clinton ███ █████ ███████████", "Hosted on corporate slop!", "Henry's Site", "ZnVjayBmYXNjaXNtCg==", "Beta test my game!", "Free malware!", "any/all!", "They're putting chemicals in the water!", "Evolving!", "On the VSB's blacklist!", "Shoutout to Zhi Su!", "Read the Hitchhiker's Guide to the Galaxy!", "Watch Andor!", "🏴‍☠️🏴‍☠️🏴‍☠️", "Technical Difficulties!", "(Web) Hostile Architect!", "je parle pas français!", "The power of music!", "YYYY-MM-DD!", "RSS support coming soon!", "High Treason!", "Minecraft reference!", "Anti-monarchist!", "Anti-fascist!", "Anti-racist!", "Anti-bigotry!","Anti-war!", "Know your rubicons!", "o moli e sina!", "Je sais manger le verre; cela ne me fait pas mal!", "mi ken moku e kiwen lukin. ona li ken ala pakala e mi!", "15!", "Transit user!", "Ban cars! (in urban areas)", "Skytrain user!", "I can eat glass, it cannot hurt me!", "Privacy is a human right!", "Linguistics!", "The big Marx in the sky!", "The revolution is just a t-shirt away!", "If you've got a blacklist, I wanna be on it!"]

function quote() {
  document.getElementById("splash_text").innerHTML = splash_text[Math.floor(Math.random()*splash_text.length)]
}
quote()

function set_opening() {
  time += 1
  hours = 0 
  mins = 0
  secs = 0
  let calc_time = time
  while (calc_time > 3599) {
    hours++
    calc_time -= 3600
  }
  while (calc_time > 59) {
    mins++
    calc_time -= 60
    secs -= 60
  }
  secs = calc_time
  const opening_text = ` _   _                       _       ____  _ _       
| | | | ___ _ __  _ __ _   _( )___  / ___|(_) |_ ___ 
| |_| |/ _ \\ '_ \\| '__| | | |// __| \\___ \\| | __/ _ \\
|  _  |  __/ | | | |  | |_| | \\__ \\  ___) | | ||  __/
|_| |_|\\___|_| |_|_|   \\__, | |___/ |____/|_|\\__\\___|
                       |___/
                  <span style="color: #00d6d6">-\`                     henry</span>@<span style="color: #00d6d6">arch</span>
                 <span style="color: #00d6d6">.o+\`</span>                    ----------
                <span style="color: #00d6d6">\`ooo/</span>                    <span style="color: #00d6d6">OS</span>: Arch Linux x86_64
               <span style="color: #00d6d6">\`+oooo:</span>                   <span style="color: #00d6d6">Host</span>: GitHub Pages
              <span style="color: #00d6d6">\`+oooooo:</span>                  <span style="color: #00d6d6">Kernel</span>: Linux
              <span style="color: #00d6d6">-+oooooo+:</span>                 <span style="color: #00d6d6">Uptime</span>: ${hours} hours, ${mins} mins, ${secs} secs
            <span style="color: #00d6d6">\`/:-:++oooo+:</span>                <span style="color: #00d6d6">Packages</span>: 0.7734 (pacman), 2^32 (flatpak)
           <span style="color: #00d6d6">\`/++++/+++++++:</span>               <span style="color: #00d6d6">Shell</span>: henry-shell
          <span style="color: #00d6d6">\`/++++++++++++++:</span>              <span style="color: #00d6d6">Terminal</span>: /dev/tty1
         <span style="color: #00d6d6">\`/+++ooooooooooooo/\`</span>            <span style="color: #00d6d6">CPU</span>: Intel 8008 (Real)
        <span style="color: #00d6d6">./ooosssso++osssssso+\`</span>           <span style="color: #00d6d6">GPU</span>: None
       <span style="color: #00d6d6">.oossssso-\`\`\`\`/ossssss+\`</span>          <span style="color: #00d6d6">Memory</span>: 4.2 GiB / 64 GiB
      <span style="color: #00d6d6">-osssssso.      :ssssssso.</span>         <span style="color: #00d6d6">Disk</span>: 42 GiB / NaN GiB (75%) - btrfs
     <span style="color: #00d6d6">:osssssss/        osssso+++.</span>        
    <span style="color: #00d6d6">/ossssssss/        +ssssooo/-</span>        
  <span style="color: #00d6d6">\`/ossssso+/:-        -:/+osssso+-</span>
 <span style="color: #00d6d6">\`+sso+:-\`                 \`.-/+oso:</span>
<span style="color: #00d6d6">\`++:.                           \`-/+/</span>
<span style="color: #00d6d6">.\`                                 \`/</span>`

  const openingpre = document.getElementById("opening-text")
  openingpre.innerHTML = opening_text
}
set_opening()
setInterval(set_opening, 1000)





