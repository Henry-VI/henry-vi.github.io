let time = 0
let mins = 0 
let secs = 0
let hours = 0

function set_opening() {
  time++
  let calc_time = time
  while (calc_time > 3600) {
    hours++
    calc_time -= 3600 
  }
  while (calc_time > 60) {
    mins++
    calc_time -= 60
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





