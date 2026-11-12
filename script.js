const shoes = [
["NIKE","Nike Air Max 270","39 · US 8 · 25 cm",110,"adulto",1,false],
["NIKE","Nike Air Max 270","36,5 · US 6 · 23 cm",110,"adulto",1,false],
["NIKE","Nike Run Deffy","40 · US 8.5 · 25,5 cm",50,"adulto",1,false],
["NIKE","Nike Vomero Running","39 · US 6.5Y · 24,5 cm",70,"adulto",1,false],
["JORDAN","Jordan 4 RM","40 · US 8.5 · 25,5 cm",95,"adulto",2,false],
["ADIDAS","Adidas Samba clásicas","39,5 · US 6,5 · 25 cm; 40 · US 7 · 25,5 cm",110,"adulto",2,false],
["ADIDAS","Adidas Samba","41,5 · US 9 · 26 cm",90,"adulto",2,false],
["ADIDAS","Adidas VL Court Bold","36,5",85,"adulto",2,true],
["ADIDAS","Adidas X_PLRPATH","36 · US 4 · 22,5 cm",60,"adulto",3,false],
["NIKE","Nike JA 1","38 · US 5.5 · 24 cm",90,"adulto",3,false],
["JORDAN","Jordan Spiziki Low","28 · US 11C · 17 cm",60,"ninos",5,false],
["ADIDAS","Adidas Toy Story","28,5 · US 11K · 17 cm; 30 · US 12K · 18 cm; 35 · US 3 · 21,5 cm",80,"ninos",5,false],
["ADIDAS","Adidas Grand Court 2.0 CF","27 · US 10K · 16,5 cm",45,"ninos",6,false],
["ADIDAS","Adidas Samba Adifom","27 · US 10K · 16,5 cm",60,"ninos",6,false],
["ADIDAS","Adidas Samba clásicas","27 · US 10K · 16,5 cm",75,"ninos",6,false],
["ADIDAS","Adidas VL Court 3.0 K","31 · US 13K · 19 cm; 33,5 · talla US no legible",40,"ninos",7,false],
["ADIDAS","Adidas VL Court 3.0 K","35 · US 3 · 21,5 cm",65,"ninos",7,false]
];
const perfumes = [["Yara Tous", "yara-tous", 40, "mujer", "Mango, coco y maracuyá", "Jazmín, heliotropo y flor de azahar del naranjo", "Vainilla, almizcle y cachemira", true], ["Yara Moi", "yara-moi", 40, "mujer", "Jazmín y melocotón", "Caramelo y ámbar", "Pachulí y sándalo", true], ["Yara Candy", "yara-candy", 40, "mujer", "Grosellas negras y mandarina verde", "Caramelo de fresa efervescente y gardenia", "Vainilla, almizcle, ámbar y sándalo", true], ["Tommy Girl", "tommy-girl", 45, "mujer", "Manzano en flor, camelia, mandarina y grosellas negras", "Limón, madreselva, rosa, toronja, azucena, menta y violeta", "Magnolia, jazmín, cedro, sándalo y cuero", false], ["Versace", "versace", 75, "mujer", "Yazu, acorde helado y granada", "Peonía, magnolia y flor de loto", "Acajou, ámbar vegetal y almizcle", false], ["Jessica Simpson", "jessica-simpson", 45, "mujer", "Flor de durazno, champaña y bergamota", "Frangipani, jazmín, peonía, flor de loto y rosa", "Ámbar, almizcle, notas amaderadas y pachulí", false], ["9 AM", "9am", 45, "mujer", "Mandarina, bergamota y pomelo", "Grosella negra y frambuesa", "Almizcle, ámbar y naranja", false], ["Yum Yum EDP Armaf", "yum-yum", 70, "mujer", "Mandarina, bergamota y pomelo", "Grosella negra y frambuesa", "Almizcle, ámbar y naranja", false], ["Guess Girl", "guess-girl", 40, "mujer", "Frambuesa, melón y bergamota", "Orquídea, lirio y acacia", "Vainilla de Madagascar y sándalo australiano", false], ["Náutica Blue", "nautica-blue", 35, "hombre", "Bergamota, hojas de albahaca y menta", "Salvia, enebro y geranio", "Sándalo, ámbar y almizcle", false], ["Adidas Ice Dive", "adidas-ice-dive", 35, "hombre", "Menta y pomelo", "Notas acuáticas y especiadas", "Notas amaderadas y almizcle", false], ["Asad Bourbon", "asad-bourbon", 40, "hombre", "Lavanda, pimienta rosa y ciruela mirabel", "Cacao, davana y nuez moscada", "Vainilla Bourbon, ámbar y vetiver", false], ["Asad Lattafa", "asad-lattafa", 45, "hombre", "Pimienta negra, piña y tabaco", "Café, pachulí e iris", "Vainilla, ámbar, maderas secas, benjuí y ládano", false], ["Oud for Glory", "oud-for-glory", 45, "hombre", "Azafrán, nuez moscada y lavanda", "Oud (madera de agar) y pachulí", "Oud, pachulí y almizcle", false], ["Coach New York", "coach-new-york", 65, "hombre", "Lima, ajenjo y pomelo", "Acuerdo de ozono y pimienta azul", "Madera de cedro, ámbar y sándalo", true], ["Calvin Klein Obsession", "ck-obsession", 45, "hombre", "Bergamota, mandarina, limón y lima", "Canela, nuez moscada, jazmín, sándalo y cilantro", "Ámbar, almizcle, vainilla, tabaco y musgo de roble", false], ["Azzaro Wanted", "azzaro-wanted", 60, "hombre", "Limón, jengibre, lavanda y menta", "Manzana, enebro, cardamomo de Guatemala y geranio", "Haba tonka, madera de ámbar y vetiver de Haití", false], ["Burberry Touch", "burberry-touch", 70, "hombre", "Artemisa, hoja de violeta y mandarina", "Nuez moscada, pimienta blanca y madera de cedro de Virginia", "Vetiver, haba tonka y almizcle", false], ["Spiderman", "spiderman", 25, "ninos", "Aromas frescos y cítricos", "Agradables y suaves en la piel de los niños", "", false], ["Spiderman Miles Morales", "spiderman-miles-morales", 25, "ninos", "Aromas frescos y especiados", "Agradables y suaves en la piel de los niños", "", false], ["Mickey Mouse", "mickey-mouse", 25, "ninos", "Aromas frescos y suaves", "Agradables y suaves en la piel de los niños", "", true], ["Princess Cenicienta", "princess-cenicienta", 25, "ninos", "Familia olfativa floral frutal", "Agradables y suaves en la piel de los niños", "", true]]

const apparel = [
["Adidas celeste","Hombre","M",35,false,"assets/ropa/ropa-p1-1.jpeg"],
["Adidas blanco","Hombre","M",35,true,"assets/ropa/ropa-p1-2.jpeg"],
["Nike running","Hombre","M",45,true,"assets/ropa/ropa-p2-1.jpeg"],
["Adidas gris","Hombre","M",35,false,"assets/ropa/ropa-p2-2.jpeg"],
["Puma verde menta","Hombre","M",40,true,"assets/ropa/ropa-p3-1.jpeg"],
["DKNY","Hombre","S",30,false,"assets/ropa/ropa-p3-2.jpeg"],
["Náutica turquesa","Hombre","L",40,false,"assets/ropa/ropa-p4-1.jpeg"],
["Náutica","Hombre","M",40,false,"assets/ropa/ropa-p4-2.jpeg"],
["Elliot Pierce diseño exclusivo","Hombre","M",40,false,"assets/ropa/ropa-p5-1.jpeg"],
["US Polo Assn.","Hombre","L",35,false,"assets/ropa/ropa-p5-2.jpeg"],
["Suéter tipo polo","Hombre","M",35,false,"assets/ropa/ropa-p6-1.jpeg"],
["Náutica polo","Hombre","M",40,false,"assets/ropa/ropa-p6-2.jpeg"],
["DKNY","Hombre","L",35,false,"assets/ropa/ropa-p7-1.jpeg"],
["Nike running","Hombre","L",70,true,"assets/ropa/ropa-p8-1.jpeg"],
["Chompa US Polo Assn.","Hombre","M",70,true,"assets/ropa/ropa-p8-2.jpeg"],
["Rompevientos Polo Assn.","Hombre","M",70,true,"assets/ropa/ropa-p9-1.jpeg"],
["Rompevientos US Polo Assn.","Hombre","S",70,false,"assets/ropa/ropa-p9-2.jpeg"],
["Rompevientos US Polo Assn.","Hombre","M",70,false,"assets/ropa/ropa-p10-1.jpeg"],
["Rompevientos US Polo Assn.","Hombre","M",70,false,"assets/ropa/ropa-p10-2.jpeg"],
["Jogger Spyder gris","Hombre","M y S",40,false,"assets/ropa/ropa-p11-1.jpeg"],
["Jogger Spyder gris","Hombre","S",40,false,"assets/ropa/ropa-p11-2.jpeg"],
["Adidas Umbrellas","Mujer","S",35,false,"assets/ropa/ropa-p12-1.jpeg"],
["Adidas","Mujer","M",35,false,"assets/ropa/ropa-p12-2.jpeg"],
["Adidas","Mujer","M",35,true,"assets/ropa/ropa-p13-1.jpeg"],
["Adidas Umbrellas","Mujer","S",35,false,"assets/ropa/ropa-p13-2.jpeg"],
["Rompevientos US Polo Assn.","Mujer","M",70,false,"assets/ropa/ropa-p14-1.jpeg"],
["Abrigo US Polo Assn.","Mujer","S",60,false,"assets/ropa/ropa-p14-2.jpeg"],
["Pantalón Spacedye Beyond Yoga","Mujer","XS",35,false,"assets/ropa/ropa-p15-1.jpeg"],
["Pijama conjunto de emociones","Mujer","38 / M",35,false,"assets/ropa/ropa-p15-2.jpeg"],
["Conjunto Star Wars","Niños","7",30,false,"assets/ropa/ropa-p16-1.jpeg"],
["Sudadera Venom","Niños","8",30,false,"assets/ropa/ropa-p16-2.jpeg"],
["Sudadera DBZ","Niños","8",30,false,"assets/ropa/ropa-p17-1.jpeg"],
["Conjunto Reebok","Niños","4",30,false,"assets/ropa/ropa-p17-2.jpeg"],
["Conjunto Marvel","Niños","4",35,false,"assets/ropa/ropa-p18-1.jpeg"],
["Conjunto Marvel Heroes","Niños","4",35,false,"assets/ropa/ropa-p18-2.jpeg"]
];
const wellness = [
["Splash Victoria's Secret – Merry Delights","Splash y cuidado personal",15,false,"","assets/bienestar/bienestar-p1-1.jpeg"],
["Splash Victoria's Secret – Floral Morning Dream","Splash y cuidado personal",15,false,"","assets/bienestar/bienestar-p1-2.jpeg"],
["Splash Victoria's Secret – Pure Seduction Joy","Splash y cuidado personal",18,false,"","assets/bienestar/bienestar-p2-1.jpeg"],
["Splash Victoria's Secret – Pink Secret Crush","Splash y cuidado personal",18,false,"","assets/bienestar/bienestar-p2-2.jpeg"],
["Splash Victoria's Secret – Festive Fizz","Splash y cuidado personal",15,false,"","assets/bienestar/bienestar-p3-1.jpeg"],
["Splash Victoria's Secret – Piña Tropicale","Splash y cuidado personal",18,true,"","assets/bienestar/bienestar-p3-2.jpeg"],
["Exfoliante crema Bouncy Butter Lemon","Splash y cuidado personal",10,false,"","assets/bienestar/bienestar-p4-1.jpeg"],
["Colágeno Verisol","Vitaminas y suplementos",45,false,"","assets/bienestar/bienestar-p4-2.jpeg"],
["Vitaminas Kirkland Signature – Adultos","Vitaminas y suplementos",25,false,"","assets/bienestar/bienestar-p5-1.jpeg"],
["Vitaminas Kirkland Signature – Niños","Vitaminas y suplementos",25,false,"","assets/bienestar/bienestar-p5-2.jpeg"],
["People's Choice – Zinc Chelated, 24 tabletas","Vitaminas y suplementos",5,false,"Estimula y fortalece las defensas del organismo frente a infecciones respiratorias y virus comunes. Contribuye a proteger la retina y a mantener una buena salud ocular. Al estar quelado, el cuerpo absorbe el mineral de manera más rápida y eficiente.","assets/bienestar/bienestar-p6-1.jpeg"],
["People's Choice – Calcio, 24 tabletas","Vitaminas y suplementos",5,true,"Combina calcio y vitamina D3 para apoyar la salud ósea y mantener la densidad de huesos y dientes.","assets/bienestar/bienestar-p6-2.jpeg"],
["Continuum – Probiotic Acidophilus, 30 tabletas","Vitaminas y suplementos",5,false,"Aporta bacterias benéficas para el intestino, ayuda a equilibrar la flora intestinal, mejora la digestión y promueve la salud digestiva.","assets/bienestar/bienestar-p7-1.jpeg"],
["Continuum – Fish Oil, 22 cápsulas","Vitaminas y suplementos",5,false,"Aporta ácidos grasos Omega-3 que apoyan la salud del corazón y la función cardiovascular.","assets/bienestar/bienestar-p7-2.jpeg"],
["Continuum – Zinc Quelado, 30 tabletas","Vitaminas y suplementos",5,false,"Mineral de alta absorción que apoya las defensas, la salud inmunitaria, visual y de la piel.","assets/bienestar/bienestar-p8-1.jpeg"],
["Continuum – Vitamina D3, 36 cápsulas","Vitaminas y suplementos",5,false,"Ayuda al cuerpo a absorber el calcio y contribuye al mantenimiento de huesos y dientes y al funcionamiento del sistema inmunitario.","assets/bienestar/bienestar-p8-2.jpeg"],
["People's Choice – Ácido Fólico, 28 tabletas","Vitaminas y suplementos",5,false,"Vitamina esencial para el crecimiento celular y la formación de tejidos.","assets/bienestar/bienestar-p9-1.jpeg"]
];
const shoePhotos=["zapatos/p1-1.png","zapatos/p1-2.png","zapatos/p1-3.png","zapatos/p1-4.png","zapatos/p2-1.png","zapatos/p2-2.png","zapatos/p2-3.png","zapatos/p2-4.png","zapatos/p3-1.png","zapatos/p3-3.png","zapatos/p5-1.png","zapatos/p5-2.png","zapatos/p6-1.png","zapatos/p6-2.png","zapatos/p6-3.png","zapatos/p7-1.png","zapatos/p7-2.png"];
let cart=[];let shoeBrandFilter='TODAS',perfumeBrandFilter='TODAS',perfumeTypeFilter='todos';const $=s=>document.querySelector(s);const money=n=>'$'+Number(n).toFixed(2);
const DAYZEN_STORAGE={cart:'dayzen_cart_v4',visits:'dayzen_visits_v1',faq:'dayzen_unanswered_v1',activity:'dayzen_activity_v1'};
function safeRead(key,fallback){try{const value=localStorage.getItem(key);return value?JSON.parse(value):fallback}catch(_){return fallback}}
function safeWrite(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch(_){}}
function saveCart(){safeWrite(DAYZEN_STORAGE.cart,cart.map(p=>({key:p.key,name:p.name,detail:p.detail,price:p.price,qty:p.qty,image:p.image||''})));}
const savedCart=safeRead(DAYZEN_STORAGE.cart,[]);
if(Array.isArray(savedCart))cart=savedCart.filter(p=>p&&typeof p.key==='string'&&typeof p.name==='string'&&Number.isFinite(Number(p.price))&&Number.isFinite(Number(p.qty))&&Number(p.qty)>0).map(p=>({...p,price:Number(p.price),qty:Math.min(99,Math.floor(Number(p.qty)))}));
function trackLocal(kind,key){const data=safeRead(DAYZEN_STORAGE.activity,{});data[kind]=data[kind]||{};data[kind][key]=(data[kind][key]||0)+1;safeWrite(DAYZEN_STORAGE.activity,data)}
function renderShoeBrandTabs(){
 const brands=['TODAS',...new Set(shoes.map(p=>p[0]))];
 $('#shoeBrandTabs').innerHTML=brands.map(b=>`<button type="button" class="brand-tab ${shoeBrandFilter===b?'active':''}" data-shoe-brand="${b}">${b==='TODAS'?'Todas las marcas':b}</button>`).join('');
}
function sizeOptions(raw){
 const value=String(raw||'').trim();
 if(value.includes(';'))return value.split(';').map(x=>x.trim()).filter(Boolean);
 if(/\s+y\s+/i.test(value))return value.split(/\s+y\s+/i).map(x=>x.trim()).filter(Boolean);
 return value?[value]:['Talla única'];
}
function sizeSelector(options,type,index){
 return `<label class="size-picker">Talla disponible<select class="product-size-choice" data-size-type="${type}" data-size-index="${index}">${options.map((v,i)=>`<option value="${i}">${v}</option>`).join('')}</select></label>`;
}
function imageUrl(path){return path?new URL(path,'https://dayzenshoop.github.io/dayzen-shoop/').href:''}
function renderShoes(){
 let q=$('#searchInput').value.toLowerCase(),cat=$('#categoryFilter').value,sort=$('#sortFilter').value;
 let list=shoes.map((p,index)=>({p,index})).filter(({p})=>(cat==='todos'||p[4]===cat)&&(shoeBrandFilter==='TODAS'||p[0]===shoeBrandFilter)&&(p[1]+' '+p[0]+' '+p[2]).toLowerCase().includes(q));
 if(sort==='low')list.sort((a,b)=>a.p[3]-b.p[3]);if(sort==='high')list.sort((a,b)=>b.p[3]-a.p[3]);
 $('#shoeGrid').innerHTML=list.map(({p,index})=>{const sizes=sizeOptions(p[2]);return `<article class="product-card"><div class="product-art"><img src="assets/${shoePhotos[index]}" alt="${p[1]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${p[0]} · ${p[4]==='ninos'?'Niños':'Adultos'}</span><h3>${p[1]}</h3>${p[6]?`<p>${p[2]}</p>`:sizeSelector(sizes,'shoe',index)}<div class="product-bottom"><strong class="price">${money(p[3])}</strong>${p[6]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-shoe="${index}">Agregar +</button>`}</div></div></article>`}).join('')||'<p>No encontramos productos con esa marca o búsqueda.</p>';
}
const perfumeBrandById={
 'yara-tous':'LATTAFA','yara-moi':'LATTAFA','yara-candy':'LATTAFA',
 'tommy-girl':'TOMMY HILFIGER','versace':'VERSACE','jessica-simpson':'JESSICA SIMPSON',
 '9am':'ARMAF','yum-yum':'ARMAF','guess-girl':'GUESS',
 'nautica-blue':'NÁUTICA','adidas-ice-dive':'ADIDAS','asad-bourbon':'LATTAFA',
 'asad-lattafa':'LATTAFA','oud-for-glory':'LATTAFA','coach-new-york':'COACH',
 'ck-obsession':'CALVIN KLEIN','azzaro-wanted':'AZZARO','burberry-touch':'BURBERRY',
 'spiderman':'MARVEL','spiderman-miles-morales':'MARVEL','mickey-mouse':'DISNEY',
 'princess-cenicienta':'DISNEY'
};
function renderPerfumeBrandTabs(){
 const brands=['TODAS',...new Set(perfumes.map(p=>perfumeBrandById[p[1]]).filter(Boolean))];
 $('#perfumeBrandTabs').innerHTML=brands.map(b=>`<button type="button" class="brand-tab ${perfumeBrandFilter===b?'active':''}" data-perfume-brand="${b}">${b==='TODAS'?'Todas las marcas':b}</button>`).join('');
}
function renderPerfumes(){
 const groups=[["mujer","Mujer"],["hombre","Hombre"],["ninos","Niños"]];
 const visible=perfumes.map((p,i)=>({p,i})).filter(({p})=>(perfumeBrandFilter==='TODAS'||perfumeBrandById[p[1]]===perfumeBrandFilter)&&(perfumeTypeFilter==='todos'||p[3]===perfumeTypeFilter));
 $('#perfumeGrid').innerHTML=groups.map(([key,label])=>{
  const items=visible.filter(({p})=>p[3]===key);
  return items.length?`<section class="perfume-group"><h3 class="perfume-group-title">${label}</h3><div class="perfume-group-grid">${items.map(({p,i})=>`<article class="perfume-card"><div class="perfume-photo"><img src="assets/perfumes/${p[1]}.png" alt="${p[0]}" loading="lazy"></div><div class="perfume-details"><span class="number">${perfumeBrandById[p[1]]||'PERFUME'} · ${label.toUpperCase()}</span><h3>${p[0]}</h3><div class="notes"><p><b>Salida:</b> ${p[4]}</p><p><b>Corazón:</b> ${p[5]}</p>${p[6]?`<p><b>Fondo:</b> ${p[6]}</p>`:''}</div><div class="perfume-bottom"><strong>${money(p[2])}</strong>${p[7]?'<span class="stock">Agotado</span>':`<button data-perfume="${i}">Agregar +</button>`}</div></div></article>`).join('')}</div></section>`:'';
 }).join('')||'<p>No hay perfumes para esta marca o categoría.</p>';
}
function renderApparel(){
 const grid=document.querySelector('#apparelGrid');
 const groups=[["Hombre","Hombre"],["Mujer","Mujer"],["Niños","Niños"]];
 grid.innerHTML=groups.map(([key,label])=>`<section class="catalog-group"><h3>${label}</h3><div class="catalog-product-grid">${apparel.map((p,i)=>{if(p[1]!==key)return '';const sizes=sizeOptions(p[2]);return `<article class="product-card"><div class="product-art"><img src="${p[5]}" alt="${p[0]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${p[1].toUpperCase()}</span><h3>${p[0]}</h3>${p[4]?`<p>Talla: ${p[2]}</p>`:sizeSelector(sizes,'apparel',i)}<div class="product-bottom"><strong class="price">${money(p[3])}</strong>${p[4]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-apparel="${i}">Agregar +</button>`}</div></div></article>`}).join('')}</div></section>`).join('');
}
function renderWellness(){
 const grid=document.querySelector('#wellnessGrid');
 const groups=["Splash y cuidado personal","Vitaminas y suplementos"];
 grid.innerHTML=groups.map(label=>`<section class="catalog-group"><h3>${label}</h3><div class="catalog-product-grid">${wellness.map((p,i)=>p[1]===label?`<article class="product-card"><div class="product-art"><img src="${p[5]}" alt="${p[0]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${label.toUpperCase()}</span><h3>${p[0]}</h3>${p[4]?`<p class="product-description">${p[4]}</p>`:''}<div class="product-bottom"><strong class="price">${money(p[2])}</strong>${p[3]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-wellness="${i}">Agregar +</button>`}</div></div></article>`:'').join('')}</div></section>`).join('');
}
function addItem(item){let old=cart.find(c=>c.key===item.key);if(old)old.qty++;else cart.push({...item,qty:1});saveCart();trackLocal('added',item.key);updateCart();openCart()}
function shippingCost(){const zone=$('#shippingZone')?.value||'';return zone==='carapungo'?0:zone==='quito'?3:zone==='national'?6:null}
function cartTotals(){
 const count=cart.reduce((n,p)=>n+p.qty,0);
 const subtotal=cart.reduce((n,p)=>n+p.price*p.qty,0);
 const highest=count>=2?Math.max(...cart.map(p=>p.price)):0;
 const discount=highest?Math.round(highest*0.10*100)/100:0;
 const productsTotal=Math.max(0,subtotal-discount);const shipping=shippingCost();
 return {count,subtotal,discount,productsTotal,shipping,total:shipping===null?productsTotal:productsTotal+shipping,highest};
}
function updateCart(){
 const t=cartTotals();$('#cartCount').textContent=t.count;
 $('#cartSubtotal').textContent=money(t.subtotal);$('#cartDiscount').textContent='-'+money(t.discount);
 $('#cartDiscountRow').hidden=t.discount===0;$('#cartShipping').textContent=t.shipping===null?'Por calcular':t.shipping===0?'Gratis':money(t.shipping);$('#cartTotal').textContent=t.shipping===null?'Selecciona zona':money(t.total);
 $('#cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><div class="cart-thumb-wrap">${p.image?`<img class="cart-thumb" src="${p.image}" alt="${p.name}">`:''}</div><div><strong>${p.name}</strong><small>${p.detail||''} · ${money(p.price)} × ${p.qty}</small></div><div><b>${money(p.price*p.qty)}</b><br><button data-remove="${i}">Quitar</button></div></div>`).join('')+'<button type="button" class="cart-clear" id="clearCart">Vaciar bolsa</button>':'<p class="empty">Todavía no agregas productos.</p>';
 if(cart.length)$('#clearCart').onclick=()=>{if(confirm('¿Deseas vaciar tu bolsa?')){cart=[];saveCart();updateCart()}};
}
function openCart(){$('#cartPanel').classList.add('open');$('#cartBackdrop').classList.add('open');$('#cartPanel').setAttribute('aria-hidden','false')}
function closeCart(){$('#cartPanel').classList.remove('open');$('#cartBackdrop').classList.remove('open');$('#cartPanel').setAttribute('aria-hidden','true')}
$('#shoeGrid').addEventListener('click',e=>{let b=e.target.closest('[data-shoe]');if(!b)return;let i=+b.dataset.shoe,p=shoes[i],sel=$(`#shoeGrid [data-size-type="shoe"][data-size-index="${i}"]`),size=sizeOptions(p[2])[Number(sel?.value||0)],photo='assets/'+shoePhotos[i];addItem({key:'s'+i+':'+size,name:p[1],detail:'Talla '+size,price:p[3],image:photo})});
$('#perfumeGrid').addEventListener('click',e=>{let b=e.target.closest('[data-perfume]');if(!b)return;let i=+b.dataset.perfume,p=perfumes[i],photo='assets/perfumes/'+p[1]+'.png';addItem({key:'p'+i,name:p[0],detail:'Perfume',price:p[2],image:photo})});
$('#apparelGrid').addEventListener('click',e=>{let b=e.target.closest('[data-apparel]');if(!b)return;let i=+b.dataset.apparel,p=apparel[i],sel=$(`#apparelGrid [data-size-type="apparel"][data-size-index="${i}"]`),size=sizeOptions(p[2])[Number(sel?.value||0)];addItem({key:'a'+i+':'+size,name:p[0],detail:'Talla '+size,price:p[3],image:p[5]})});
$('#wellnessGrid').addEventListener('click',e=>{let b=e.target.closest('[data-wellness]');if(!b)return;let i=+b.dataset.wellness,p=wellness[i];addItem({key:'w'+i,name:p[0],detail:p[1],price:p[2],image:p[5]})});
$('#cartItems').addEventListener('click',e=>{let b=e.target.closest('[data-remove]');if(b){cart.splice(+b.dataset.remove,1);saveCart();updateCart()}});
$('#shoeBrandTabs').addEventListener('click',e=>{const b=e.target.closest('[data-shoe-brand]');if(!b)return;shoeBrandFilter=b.dataset.shoeBrand;renderShoeBrandTabs();renderShoes()});
$('#perfumeBrandTabs').addEventListener('click',e=>{const b=e.target.closest('[data-perfume-brand]');if(!b)return;perfumeBrandFilter=b.dataset.perfumeBrand;renderPerfumeBrandTabs();renderPerfumes()});
$('#perfumeTypeTabs').addEventListener('click',e=>{const b=e.target.closest('[data-perfume-type]');if(!b)return;perfumeTypeFilter=b.dataset.perfumeType;document.querySelectorAll('#perfumeTypeTabs .brand-tab').forEach(x=>x.classList.toggle('active',x===b));renderPerfumes()});
$('#searchInput').addEventListener('input',renderShoes);$('#categoryFilter').addEventListener('change',renderShoes);$('#sortFilter').addEventListener('change',renderShoes);
$('#openCart').onclick=openCart;$('#closeCart').onclick=closeCart;$('#cartBackdrop').onclick=closeCart;
$('#shippingZone').addEventListener('change',()=>{const zone=$('#shippingZone').value;if(zone==='galapagos')alert('DAYZEN no realiza envíos a Galápagos.');updateCart()});
$('#checkout').onclick=()=>{if(!cart.length){alert('Agrega al menos un producto antes de enviar tu pedido.');return}const zone=$('#shippingZone').value;if(!zone){alert('Selecciona tu zona de entrega para calcular el envío.');$('#shippingZone').focus();return}if(zone==='galapagos'){alert('DAYZEN no realiza envíos a Galápagos.');return}const t=cartTotals();const lines=cart.map(p=>`• ${p.name} (${p.detail||'sin detalle'}) x${p.qty} — ${money(p.price*p.qty)}${p.image?'\n  Foto del producto: '+imageUrl(p.image):''}`).join('\n');const name=$('#customerName').value.trim();const address=$('#shippingAddress').value.trim();const zoneLabel=zone==='carapungo'?'Carapungo, Quito':zone==='quito'?'Quito (otros sectores)':'Resto del Ecuador';const msg=`Hola DAYZEN, quiero realizar este pedido.${name?'\nNombre: '+name:''}${address?'\nSector/ciudad: '+address:''}\nZona de entrega: ${zoneLabel}\n\n${lines}\n\nSubtotal: ${money(t.subtotal)}${t.discount?'\nDescuento DAYZEN 10% (una sola vez sobre el producto de mayor valor): -'+money(t.discount):''}\nTotal de productos con descuento: ${money(t.productsTotal)}\nEnvío: ${t.shipping===0?'Gratis':money(t.shipping)}\nTOTAL ESTIMADO DEL PEDIDO: ${money(t.total)}\n\nPor favor confirmen disponibilidad, dirección y forma de pago por WhatsApp.`;window.open('https://wa.me/'+$('#waNumber').value+'?text='+encodeURIComponent(msg),'_blank','noopener')};
const upcoming=[["ADIDAS CELESTE","zapatos/p3-2.png","Próximo ingreso"],["Próximamente","zapatos/p4-1.png","Talla 41,5 · 26 cm"],["Próximamente","zapatos/p4-2.png","Talla 42 · 26,5 cm"],["Próximamente","zapatos/p4-3.png","Talla 40 · 25 cm"]];
const upcomingWrap=document.createElement('section');upcomingWrap.className='upcoming-section';upcomingWrap.innerHTML='<h3>Próximamente</h3><div class="upcoming-grid">'+upcoming.map(p=>`<article class="product-card"><div class="product-art"><img src="assets/${p[1]}" alt="${p[0]}"></div><div class="product-info"><span class="brand-tag">NUEVO INGRESO</span><h3>${p[0]}</h3><p>${p[2]}</p><div class="product-bottom"><span class="stock">Próximamente</span></div></div></article>`).join('')+'</div>';$('#shoeGrid').after(upcomingWrap);
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
$('#year').textContent=new Date().getFullYear();renderShoeBrandTabs();renderPerfumeBrandTabs();renderShoes();renderPerfumes();updateCart();

renderApparel();
renderWellness();
if(cart.length){updateCart();const restoreNote=document.createElement('p');restoreNote.className='cart-restore-note';restoreNote.textContent='Tu bolsa anterior está guardada en este navegador.';$('#cartItems').prepend(restoreNote)}



// DERECK 2.0: respuestas automáticas por reglas, sin servicios externos ni costo por mensaje.
const dereckPanel=$('#dereckPanel'),dereckChat=$('#dereckChat');
function dereckOpen(){dereckPanel.classList.add('open');dereckPanel.setAttribute('aria-hidden','false');$('#dereckLauncher').style.display='none';$('#dereckInput').focus();const visits=Number(safeRead(DAYZEN_STORAGE.visits,0)||0);if(visits>0&&!dereckPanel.dataset.returnWelcomed){dereckPanel.dataset.returnWelcomed='1';dereckMessage('¡Qué gusto tenerte de vuelta! 😊 Si dejaste productos en tu bolsa desde este mismo navegador, puedes recuperarlos al abrirla.');}safeWrite(DAYZEN_STORAGE.visits,visits+1)}
function dereckClose(){dereckPanel.classList.remove('open');dereckPanel.setAttribute('aria-hidden','true');$('#dereckLauncher').style.display='flex'}
function dereckMessage(html,kind='bot'){const node=document.createElement('div');node.className='dereck-message dereck-'+kind;node.innerHTML=html;dereckChat.appendChild(node);dereckChat.scrollTop=dereckChat.scrollHeight}
function dereckUserMessage(text){const node=document.createElement('div');node.className='dereck-message dereck-user';node.textContent=text;dereckChat.appendChild(node);dereckChat.scrollTop=dereckChat.scrollHeight}
function dereckMenu(){
 dereckChat.innerHTML='<div class="dereck-message dereck-bot">¡Claro! Soy Dereck, tu asesor DAYZEN. Puedes escribirme tu pregunta o elegir una categoría. ✨</div><div class="dereck-options" id="dereckOptions"><button data-dereck-action="zapatos">👟 Ver zapatos</button><button data-dereck-action="perfumes">🌸 Encontrar un perfume</button><button data-dereck-action="ropa">👕 Ver ropa</button><button data-dereck-action="bienestar">✨ Cuidado y bienestar</button><button data-dereck-action="stock">📦 Consultar disponibilidad</button><button data-dereck-action="promo">🏷️ Promoción vigente</button><button data-dereck-action="envios">🚚 Envíos y entregas</button><button data-dereck-action="gift">🎁 Ideas para regalo</button><button data-dereck-action="whatsapp">💬 Hablar por WhatsApp</button></div>';
 dereckChat.scrollTop=dereckChat.scrollHeight;
}
function dereckShowProducts(kind,budget=null){
 const wrap=document.createElement('div');wrap.className='dereck-options';wrap.id='dereckResults';let products=[];
 if(kind==='zapatos')products=shoes.map((p,i)=>({name:p[1],detail:p[2],price:p[3],out:p[6],key:'s'+i}));
 if(kind==='perfumes')products=perfumes.map((p,i)=>({name:p[0],detail:'Perfume · '+p[3],price:p[2],out:p[7],key:'p'+i}));
 if(kind==='ropa')products=apparel.map((p,i)=>({name:p[0],detail:p[1]+' · Talla '+p[2],price:p[3],out:p[4],key:'a'+i}));
 if(kind==='bienestar')products=wellness.map((p,i)=>({name:p[0],detail:p[1],price:p[2],out:p[3],key:'w'+i}));
 let available=products.filter(p=>!p.out&&(!budget||p.price<=budget)).sort((a,b)=>a.price-b.price).slice(0,6);
 wrap.innerHTML=available.map(p=>`<div class="dereck-result"><strong>${p.name}</strong><p>${p.detail}</p><p><b>${money(p.price)}</b></p><button type="button" data-dereck-add="${p.key}">Agregar a mi bolsa</button></div>`).join('')||'<div class="dereck-message dereck-bot">No encontré productos disponibles dentro de ese presupuesto. Puedes consultar otras opciones por WhatsApp.</div>';
 dereckChat.appendChild(wrap);const back=document.createElement('button');back.className='dereck-back';back.textContent='← Volver al menú';back.onclick=dereckMenu;dereckChat.appendChild(back);dereckChat.scrollTop=dereckChat.scrollHeight;
}
function dereckStock(){
 const sold=[];shoes.forEach(p=>{if(p[6])sold.push(p[1]+' (zapatos)')});perfumes.forEach(p=>{if(p[7])sold.push(p[0]+' (perfume)')});apparel.forEach(p=>{if(p[4])sold.push(p[0]+' (ropa)')});wellness.forEach(p=>{if(p[3])sold.push(p[0])});
 const upcomingNames=upcoming.map(p=>p[0]);dereckMessage('<b>Estado registrado en nuestro catálogo:</b><br><br><b>Agotados:</b><br>'+sold.join('<br>')+'<br><br><b>Próximamente:</b><br>'+upcomingNames.join('<br>')+'<br><br>El inventario puede cambiar; confirmamos la disponibilidad final por WhatsApp.');
}
function dereckNormalize(value){return String(value||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[¿?¡!.,;:]/g,' ').replace(/\s+/g,' ').trim()}
function dereckGift(raw){
 const q=dereckNormalize(raw);const match=q.match(/(?:hasta|menos de|maximo|max|presupuesto de|presupuesto)\s*\$?\s*(\d+(?:[.,]\d{1,2})?)/);const budget=match?Number(match[1].replace(',','.')):null;
 let audience='';if(/(para hombre|para el|novio|papa|papá|esposo|caballero)/.test(q))audience='hombre';else if(/(para mujer|para ella|novia|mama|mamá|esposa|dama)/.test(q))audience='mujer';else if(/(nino|nina|niño|niña|hijo|hija|infantil)/.test(q))audience='ninos';
 let kind='';if(/(perfume|fragancia|aroma)/.test(q))kind='perfumes';else if(/(zapato|zapatilla|tenis)/.test(q))kind='zapatos';else if(/(ropa|prenda|camiseta|chompa|pantalon)/.test(q))kind='ropa';else if(/(vitamina|splash|cuidado|bienestar|crema)/.test(q))kind='bienestar';
 let items=[];
 if(kind==='perfumes'||!kind){items=perfumes.map((p,i)=>({name:p[0],detail:'Perfume · '+p[3],price:p[2],out:p[7],key:'p'+i,audience:p[3],kind:'perfumes'}));}
 if(kind==='zapatos'||!kind)items=items.concat(shoes.map((p,i)=>({name:p[1],detail:p[2],price:p[3],out:p[6],key:'s'+i,audience:p[4]==='ninos'?'ninos':'adulto',kind:'zapatos'})));
 if(kind==='ropa'||!kind)items=items.concat(apparel.map((p,i)=>({name:p[0],detail:p[1]+' · Talla '+p[2],price:p[3],out:p[4],key:'a'+i,audience:p[1].toLowerCase()==='niños'?'ninos':p[1].toLowerCase(),kind:'ropa'})));
 if(kind==='bienestar'||!kind)items=items.concat(wellness.map((p,i)=>({name:p[0],detail:p[1],price:p[2],out:p[3],key:'w'+i,kind:'bienestar'})));
 items=items.filter(p=>!p.out&&(!budget||p.price<=budget));
 if(audience)items=items.filter(p=>p.audience===audience||(p.kind==='zapatos'&&p.audience==='adulto')||(p.kind==='bienestar'&&audience!=='ninos'));
 if(kind)items=items.filter(p=>p.kind===kind);
 items.sort((a,b)=>a.price-b.price);items=items.slice(0,4);
 dereckMessage('¡Qué buen detalle! 🎁 '+(audience?'Buscaré opciones para '+(audience==='ninos'?'niños':audience)+'. ':'')+(budget?'Dentro de '+money(budget)+'. ':'')+'Estas son algunas ideas disponibles:');
 if(!items.length){dereckMessage('No encontré una opción disponible que coincida con esos criterios. Puedes ampliar el presupuesto o consultar a nuestro equipo por WhatsApp.');return}
 const wrap=document.createElement('div');wrap.className='dereck-options';wrap.innerHTML=items.map(p=>`<div class="dereck-result"><strong>${p.name}</strong><p>${p.detail}</p><p><b>${money(p.price)}</b></p><button type="button" data-dereck-add="${p.key}">Agregar a mi bolsa</button></div>`).join('');dereckChat.appendChild(wrap);dereckChat.scrollTop=dereckChat.scrollHeight;
}
function dereckPromotion(){dereckMessage('<b>¡Tenemos un beneficio para ti! ✨</b><br>Al llevar 2 o más productos, recibes <b>10% de descuento una sola vez sobre el producto de mayor precio</b>. Se calcula automáticamente en tu bolsa y se refleja en el total antes de enviar tu pedido.')}
function dereckShipping(){dereckMessage('<b>🚚 Entregas y envíos DAYZEN</b><br>• <b>Carapungo, Quito:</b> entrega gratuita.<br>• <b>Dentro de Quito:</b> $3 por envío.<br>• <b>Resto del Ecuador:</b> $6 por Servientrega.<br>• <b>Galápagos:</b> no realizamos envíos.<br><br>Los envíos nacionales se realizan por Servientrega después de confirmar el pago mediante WhatsApp. El costo final se confirma con nuestro equipo.')}
function dereckWhatsApp(question=''){const msg=encodeURIComponent('Hola DAYZEN, estoy conversando con Dereck y quisiera recibir asesoría.'+(question?' Mi pregunta es: '+question:''));window.open('https://wa.me/593967090982?text='+msg,'_blank','noopener')}
function dereckAnswer(raw){
 const q=dereckNormalize(raw);trackLocal('questions',q.slice(0,90));
 if(/(descuento|promocion|rebaja|oferta|dos productos|2 productos|segunda unidad)/.test(q)){dereckPromotion();return}
 if(/(envio|envios|entrega|servientrega|carapungo|galapagos|galapago|costo de envio)/.test(q)){if(/galapagos|galapago/.test(q)){dereckMessage('Por el momento, DAYZEN no realiza envíos a Galápagos.');return}if(/carapungo/.test(q)){dereckMessage('¡Buenas noticias! ✨ En Carapungo, Quito, la entrega es gratuita. Coordinamos los detalles por WhatsApp.');return}if(/quito/.test(q)){dereckMessage('Dentro de Quito el envío cuesta <b>$3</b>. En Carapungo la entrega es gratuita.');return}if(/guayaquil|cuenca|ambato|loja|machala|manta|ibarra|riobamba|esmeraldas|santo domingo|ecuador/.test(q)){dereckMessage('Para el resto del Ecuador, el envío por <b>Servientrega cuesta $6</b> y se realiza después de confirmar el pago mediante WhatsApp. No realizamos envíos a Galápagos.');return}dereckShipping();return}
 if(/(regalo|regalar|cumpleanos|aniversario|detalle para|sorpresa|para hombre|para mujer|para ella|para el|novio|novia|mama|papa|caballero|dama)/.test(q)){dereckGift(raw);return}
 if(/(pago|transferencia|deposito|depositar|como pago|tarjeta)/.test(q)){dereckMessage('El pedido y la confirmación del pago se coordinan por WhatsApp. La página no procesa pagos con tarjeta. Cuando tengas tus productos en la bolsa, selecciona <b>Pedir por WhatsApp</b>.');return}
 if(/(stock|disponible|disponibilidad|agotado|proximamente)/.test(q)){dereckStock();return}
 const budgetMatch=q.match(/(?:hasta|menos de|maximo|max|presupuesto de|presupuesto)\s*\$?\s*(\d+(?:[.,]\d{1,2})?)/);const budget=budgetMatch?Number(budgetMatch[1].replace(',','.')):null;
 if(/(perfume|fragancia|aroma)/.test(q)){dereckMessage('¡Claro! Puedo mostrarte perfumes disponibles'+(budget?' hasta '+money(budget):'')+'.');dereckShowProducts('perfumes',budget);return}
 if(/(zapato|zapatilla|tenis)/.test(q)){dereckMessage('¡Claro! Aquí tienes calzado disponible'+(budget?' hasta '+money(budget):'')+'.');dereckShowProducts('zapatos',budget);return}
 if(/(ropa|camiseta|chompa|pantalon|prenda)/.test(q)){dereckMessage('¡Claro! Aquí tienes prendas disponibles'+(budget?' hasta '+money(budget):'')+'.');dereckShowProducts('ropa',budget);return}
 if(/(vitamina|splash|cuidado|bienestar|crema|suplemento)/.test(q)){dereckMessage('¡Claro! Aquí tienes productos de cuidado y bienestar disponibles'+(budget?' hasta '+money(budget):'')+'.');dereckShowProducts('bienestar',budget);return}
 if(/(talla|tallas|medida|medidas)/.test(q)){dereckMessage('Las tallas y medidas están indicadas en cada producto del catálogo. Dime qué modelo te interesa y te ayudo a localizarlo. La disponibilidad final se confirma por WhatsApp.');return}
 if(/(hola|buenas|buenos dias|buenas tardes|buenas noches)/.test(q)){dereckMessage('¡Hola! 😊 Bienvenido a DAYZEN. ¿Buscas zapatos, perfumes, ropa o cuidado y bienestar? También puedo ayudarte con regalos, descuentos y envíos.');return}
 if(/(whatsapp|asesor|persona|vendedor|humano|contacto)/.test(q)){dereckMessage('¡Con gusto! Te conecto con nuestro equipo para una atención personalizada.');dereckWhatsApp();return}
 const pending=safeRead(DAYZEN_STORAGE.faq,[]);pending.push({question:String(raw).slice(0,300),date:new Date().toISOString()});safeWrite(DAYZEN_STORAGE.faq,pending.slice(-30));
 dereckMessage('Gracias por tu pregunta. Todavía no tengo una respuesta segura para eso y prefiero no darte información incorrecta. Puedes enviarla a nuestro equipo por WhatsApp y te ayudaremos personalmente.');
 const ask=document.createElement('button');ask.type='button';ask.className='dereck-back';ask.textContent='Enviar esta pregunta por WhatsApp';ask.onclick=()=>dereckWhatsApp(raw);dereckChat.appendChild(ask);dereckChat.scrollTop=dereckChat.scrollHeight;
}
$('#dereckLauncher').addEventListener('click',dereckOpen);$('#dereckClose').addEventListener('click',dereckClose);$('#dereckHome').addEventListener('click',dereckMenu);
$('#dereckForm').addEventListener('submit',e=>{e.preventDefault();const input=$('#dereckInput');const value=input.value.trim();if(!value)return;dereckUserMessage(value);input.value='';dereckAnswer(value)});
dereckChat.addEventListener('click',e=>{
 const choice=e.target.closest('[data-dereck-action]');if(choice){const action=choice.dataset.dereckAction;trackLocal('advisor_actions',action);if(['zapatos','perfumes','ropa','bienestar'].includes(action)){dereckMessage('¡Buena elección! Aquí tienes algunas opciones.');dereckShowProducts(action)}else if(action==='stock')dereckStock();else if(action==='promo')dereckPromotion();else if(action==='envios')dereckShipping();else if(action==='gift')dereckMessage('¡Con gusto! 🎁 Escribe algo como: “regalo para hombre hasta $50”, “perfume para mujer” o “detalle para niño hasta $30” y buscaré opciones disponibles.');else if(action==='whatsapp'){dereckMessage('¡Con gusto! Te conecto con nuestro equipo.');dereckWhatsApp()}}
 const add=e.target.closest('[data-dereck-add]');if(add){const key=add.dataset.dereckAdd,type=key[0],i=Number(key.slice(1));let item;if(type==='s'){const p=shoes[i];item={key,name:p[1],detail:p[2],price:p[3]}}if(type==='p'){const p=perfumes[i];item={key,name:p[0],detail:'Perfume',price:p[2]}}if(type==='a'){const p=apparel[i];item={key,name:p[0],detail:'Talla '+p[2],price:p[3]}}if(type==='w'){const p=wellness[i];item={key,name:p[0],detail:p[1],price:p[2]}}if(item){addItem(item);add.textContent='Agregado ✓';add.disabled=true}}
});
