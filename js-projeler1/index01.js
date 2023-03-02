const refreshBtn = document.querySelector(".resresh-btn");
const maxPaletteBoxes = 18;
const container = document.querySelector(".container");

// clasları ve idleri degişkenlere atdık

// fonksiyon oluşturduk function generatePalette(){} ile aynı işlem
const generatePalette = () =>{
    // butona tıklandıgında container içindeki hepsini temizle dedik
    container.innerHTML="";
    // burada bir for döngüsü başlattık ve 18 e kadar devam et dedik
    for(let i =0; i<maxPaletteBoxes; i++){
        // 6 haneli sayılar oluşturduk
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        // randomhex degişkeni içindeki random sayıların başına # işareti ekledik
        randomHex = `#${randomHex.padStart(6,"0")}`;
        
        // li color adında li elementi oluşturduk
        const color = document.createElement("li");
        // color adında bir liste oluştuduk
        color.classList.add("color");
        // div ve spanları buraya koyduk ve ${randomHex} ile html etiketlerinin yerine bunları yazdırdık
        color.innerHTML = ` <div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`

        color.addEventListener("click", () => copycolor(color,randomHex));
        container.appendChild(color);
    }
}

generatePalette();

// iki parametre verdik elem kopyalanacak html elemeti hexval kopyalanacak kod
const copycolor = (elem, hexval) =>{
    const colorElement  = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexval).then(() =>{
        colorElement.innerText ="KOPYALANDI";
        setTimeout(() => colorElement.innerText = hexval,1000);
    })
};

refreshBtn.addEventListener("click", generatePalette);









