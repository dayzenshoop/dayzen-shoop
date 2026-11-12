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
function renderShoeBrandTabs(){
 const brands=['TODAS',...new Set(shoes.map(p=>p[0]))];
 $('#shoeBrandTabs').innerHTML=brands.map(b=>`<button type="button" class="brand-tab ${shoeBrandFilter===b?'active':''}" data-shoe-brand="${b}">${b==='TODAS'?'Todas las marcas':b}</button>`).join('');
}
function renderShoes(){
 let q=$('#searchInput').value.toLowerCase(),cat=$('#categoryFilter').value,sort=$('#sortFilter').value;
 let list=shoes.map((p,index)=>({p,index})).filter(({p})=>(cat==='todos'||p[4]===cat)&&(shoeBrandFilter==='TODAS'||p[0]===shoeBrandFilter)&&(p[1]+' '+p[0]+' '+p[2]).toLowerCase().includes(q));
 if(sort==='low')list.sort((a,b)=>a.p[3]-b.p[3]);if(sort==='high')list.sort((a,b)=>b.p[3]-a.p[3]);
 $('#shoeGrid').innerHTML=list.map(({p,index})=>`<article class="product-card"><div class="product-art"><img src="assets/${shoePhotos[index]}" alt="${p[1]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${p[0]} · ${p[4]==='ninos'?'Niños':'Adultos'}</span><h3>${p[1]}</h3><p>${p[2]}</p><div class="product-bottom"><strong class="price">${money(p[3])}</strong>${p[6]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-shoe="${index}">Agregar +</button>`}</div></div></article>`).join('')||'<p>No encontramos productos con esa marca o búsqueda.</p>';
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
 grid.innerHTML=groups.map(([key,label])=>`<section class="catalog-group"><h3>${label}</h3><div class="catalog-product-grid">${apparel.map((p,i)=>p[1]===key?`<article class="product-card"><div class="product-art"><img src="${p[5]}" alt="${p[0]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${p[1].toUpperCase()}</span><h3>${p[0]}</h3><p>Talla: ${p[2]}</p><div class="product-bottom"><strong class="price">${money(p[3])}</strong>${p[4]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-apparel="${i}">Agregar +</button>`}</div></div></article>`:'').join('')}</div></section>`).join('');
}
function renderWellness(){
 const grid=document.querySelector('#wellnessGrid');
 const groups=["Splash y cuidado personal","Vitaminas y suplementos"];
 grid.innerHTML=groups.map(label=>`<section class="catalog-group"><h3>${label}</h3><div class="catalog-product-grid">${wellness.map((p,i)=>p[1]===label?`<article class="product-card"><div class="product-art"><img src="${p[5]}" alt="${p[0]}" loading="lazy"></div><div class="product-info"><span class="brand-tag">${label.toUpperCase()}</span><h3>${p[0]}</h3>${p[4]?`<p class="product-description">${p[4]}</p>`:''}<div class="product-bottom"><strong class="price">${money(p[2])}</strong>${p[3]?'<span class="stock">Agotado</span>':`<button class="add-btn" data-wellness="${i}">Agregar +</button>`}</div></div></article>`:'').join('')}</div></section>`).join('');
}
function addItem(item){let old=cart.find(c=>c.key===item.key);if(old)old.qty++;else cart.push({...item,qty:1});updateCart();openCart()}
function updateCart(){let count=cart.reduce((n,p)=>n+p.qty,0),total=cart.reduce((n,p)=>n+p.price*p.qty,0);$('#cartCount').textContent=count;$('#cartTotal').textContent=money(total);$('#cartItems').innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><div><strong>${p.name}</strong><small>${p.detail||''} · ${money(p.price)} × ${p.qty}</small></div><div><b>${money(p.price*p.qty)}</b><br><button data-remove="${i}">Quitar</button></div></div>`).join(''):'<p class="empty">Todavía no agregas productos.</p>'}
function openCart(){$('#cartPanel').classList.add('open');$('#cartBackdrop').classList.add('open');$('#cartPanel').setAttribute('aria-hidden','false')}
function closeCart(){$('#cartPanel').classList.remove('open');$('#cartBackdrop').classList.remove('open');$('#cartPanel').setAttribute('aria-hidden','true')}
$('#shoeGrid').addEventListener('click',e=>{let b=e.target.closest('[data-shoe]');if(!b)return;let p=shoes[+b.dataset.shoe];addItem({key:'s'+b.dataset.shoe,name:p[1],detail:p[2],price:p[3]})});
$('#perfumeGrid').addEventListener('click',e=>{let b=e.target.closest('[data-perfume]');if(!b)return;let p=perfumes[+b.dataset.perfume];addItem({key:'p'+b.dataset.perfume,name:p[0],detail:'Perfume',price:p[2]})});
$('#apparelGrid').addEventListener('click',e=>{let b=e.target.closest('[data-apparel]');if(!b)return;let p=apparel[+b.dataset.apparel];addItem({key:'a'+b.dataset.apparel,name:p[0],detail:'Talla '+p[2],price:p[3]})});
$('#wellnessGrid').addEventListener('click',e=>{let b=e.target.closest('[data-wellness]');if(!b)return;let p=wellness[+b.dataset.wellness];addItem({key:'w'+b.dataset.wellness,name:p[0],detail:p[1],price:p[2]})});
$('#cartItems').addEventListener('click',e=>{let b=e.target.closest('[data-remove]');if(b){cart.splice(+b.dataset.remove,1);updateCart()}});
$('#shoeBrandTabs').addEventListener('click',e=>{const b=e.target.closest('[data-shoe-brand]');if(!b)return;shoeBrandFilter=b.dataset.shoeBrand;renderShoeBrandTabs();renderShoes()});
$('#perfumeBrandTabs').addEventListener('click',e=>{const b=e.target.closest('[data-perfume-brand]');if(!b)return;perfumeBrandFilter=b.dataset.perfumeBrand;renderPerfumeBrandTabs();renderPerfumes()});
$('#perfumeTypeTabs').addEventListener('click',e=>{const b=e.target.closest('[data-perfume-type]');if(!b)return;perfumeTypeFilter=b.dataset.perfumeType;document.querySelectorAll('#perfumeTypeTabs .brand-tab').forEach(x=>x.classList.toggle('active',x===b));renderPerfumes()});
$('#searchInput').addEventListener('input',renderShoes);$('#categoryFilter').addEventListener('change',renderShoes);$('#sortFilter').addEventListener('change',renderShoes);
$('#openCart').onclick=openCart;$('#closeCart').onclick=closeCart;$('#cartBackdrop').onclick=closeCart;
$('#checkout').onclick=()=>{if(!cart.length){alert('Agrega al menos un producto antes de enviar tu pedido.');return}let total=cart.reduce((n,p)=>n+p.price*p.qty,0);let lines=cart.map(p=>`• ${p.name} (${p.detail||'sin detalle'}) x${p.qty} — ${money(p.price*p.qty)}`).join('\n');let name=$('#customerName').value.trim();let msg=`Hola DAYZEN, quiero realizar este pedido.${name?'\nNombre: '+name:''}\n\n${lines}\n\nTotal estimado: ${money(total)}\nPor favor confirmen disponibilidad, entrega y forma de pago.`;window.open('https://wa.me/'+$('#waNumber').value+'?text='+encodeURIComponent(msg),'_blank','noopener')};
const upcoming=[["ADIDAS CELESTE","zapatos/p3-2.png","Próximo ingreso"],["Próximamente","zapatos/p4-1.png","Talla 41,5 · 26 cm"],["Próximamente","zapatos/p4-2.png","Talla 42 · 26,5 cm"],["Próximamente","zapatos/p4-3.png","Talla 40 · 25 cm"]];
const upcomingWrap=document.createElement('section');upcomingWrap.className='upcoming-section';upcomingWrap.innerHTML='<h3>Próximamente</h3><div class="upcoming-grid">'+upcoming.map(p=>`<article class="product-card"><div class="product-art"><img src="assets/${p[1]}" alt="${p[0]}"></div><div class="product-info"><span class="brand-tag">NUEVO INGRESO</span><h3>${p[0]}</h3><p>${p[2]}</p><div class="product-bottom"><span class="stock">Próximamente</span></div></div></article>`).join('')+'</div>';$('#shoeGrid').after(upcomingWrap);
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
$('#year').textContent=new Date().getFullYear();renderShoeBrandTabs();renderPerfumeBrandTabs();renderShoes();renderPerfumes();updateCart();

renderApparel();
renderWellness();


// DERECK: asesor guiado gratuito (sin IA externa ni costos por mensaje)
const dereckPanel=$('#dereckPanel'),dereckChat=$('#dereckChat');
function dereckOpen(){dereckPanel.classList.add('open');dereckPanel.setAttribute('aria-hidden','false');$('#dereckLauncher').style.display='none'}
function dereckClose(){dereckPanel.classList.remove('open');dereckPanel.setAttribute('aria-hidden','true');$('#dereckLauncher').style.display='flex'}
function dereckMessage(text){const node=document.createElement('div');node.className='dereck-message dereck-bot';node.innerHTML=text;dereckChat.appendChild(node);dereckChat.scrollTop=dereckChat.scrollHeight}
function dereckMenu(){
 dereckChat.innerHTML='<div class="dereck-message dereck-bot">¡Claro! Estoy listo para ayudarte. Elige una categoría y te mostraré opciones del catálogo DAYZEN. ✨</div><div class="dereck-options" id="dereckOptions"><button data-dereck-action="zapatos">👟 Ver zapatos</button><button data-dereck-action="perfumes">🌸 Encontrar un perfume</button><button data-dereck-action="ropa">👕 Ver ropa</button><button data-dereck-action="bienestar">✨ Cuidado y bienestar</button><button data-dereck-action="stock">📦 Consultar disponibilidad</button><button data-dereck-action="whatsapp">💬 Hablar por WhatsApp</button></div>';
}
function dereckShowProducts(kind){
 const wrap=document.createElement('div');wrap.className='dereck-options';wrap.id='dereckResults';
 let products=[];
 if(kind==='zapatos')products=shoes.map((p,i)=>({name:p[1],detail:p[2],price:p[3],out:p[6],key:'s'+i,add:()=>addItem({key:'s'+i,name:p[1],detail:p[2],price:p[3]})}));
 if(kind==='perfumes')products=perfumes.map((p,i)=>({name:p[0],detail:'Salida: '+p[4]+' · Corazón: '+p[5],price:p[2],out:p[7],key:'p'+i,add:()=>addItem({key:'p'+i,name:p[0],detail:'Perfume',price:p[2]})}));
 if(kind==='ropa')products=apparel.map((p,i)=>({name:p[0],detail:p[1]+' · Talla '+p[2],price:p[3],out:p[4],key:'a'+i,add:()=>addItem({key:'a'+i,name:p[0],detail:'Talla '+p[2],price:p[3]})}));
 if(kind==='bienestar')products=wellness.map((p,i)=>({name:p[0],detail:p[1],price:p[2],out:p[3],key:'w'+i,add:()=>addItem({key:'w'+i,name:p[0],detail:p[1],price:p[2]})}));
 const available=products.filter(p=>!p.out).slice(0,6);
 const results=available.map(p=>`<div class="dereck-result"><strong>${p.name}</strong><p>${p.detail}</p><p><b>${money(p.price)}</b></p><button type="button" data-dereck-add="${p.key}">Agregar a mi bolsa</button></div>`).join('');
 wrap.innerHTML=results||'<div class="dereck-message dereck-bot">Por ahora no tengo opciones disponibles en esta categoría. Escríbenos y confirmamos novedades.</div>';
 dereckChat.appendChild(wrap);
 const more=document.createElement('div');more.className='dereck-message dereck-bot';more.textContent='Estas son algunas opciones disponibles del catálogo. Si buscas un modelo específico, puedes consultar directamente por WhatsApp.';dereckChat.appendChild(more);
 const back=document.createElement('button');back.className='dereck-back';back.textContent='← Volver al menú';back.onclick=dereckMenu;dereckChat.appendChild(back);dereckChat.scrollTop=dereckChat.scrollHeight;
}
function dereckStock(){
 const sold=[];
 shoes.forEach(p=>{if(p[6])sold.push(p[1]+' (zapatos)')});
 perfumes.forEach(p=>{if(p[7])sold.push(p[0]+' (perfume)')});
 apparel.forEach(p=>{if(p[4])sold.push(p[0]+' (ropa)')});
 wellness.forEach(p=>{if(p[3])sold.push(p[0])});
 const upcomingNames=upcoming.map(p=>p[0]);
 dereckMessage('<b>Te comparto el estado registrado en el catálogo:</b><br><br><b>Agotados:</b><br>'+sold.join('<br>')+'<br><br><b>Próximamente:</b><br>'+upcomingNames.join('<br>')+'<br><br>El inventario puede cambiar. Si deseas confirmar una unidad, te ayudo a escribirnos.');
 const back=document.createElement('button');back.className='dereck-back';back.textContent='← Volver al menú';back.onclick=dereckMenu;dereckChat.appendChild(back);dereckChat.scrollTop=dereckChat.scrollHeight;
}
$('#dereckLauncher').addEventListener('click',dereckOpen);
$('#dereckClose').addEventListener('click',dereckClose);
$('#dereckHome').addEventListener('click',dereckMenu);
dereckChat.addEventListener('click',e=>{
 const choice=e.target.closest('[data-dereck-action]');
 if(choice){
  const action=choice.dataset.dereckAction;
  if(['zapatos','perfumes','ropa','bienestar'].includes(action)){const labels={zapatos:'zapatos',perfumes:'perfumes',ropa:'ropa',bienestar:'cuidado y bienestar'};dereckMessage('¡Buena elección! Vamos a ver '+labels[action]+'.');dereckShowProducts(action)}
  else if(action==='stock')dereckStock();
  else if(action==='whatsapp'){const msg=encodeURIComponent('Hola DAYZEN, estoy conversando con Dereck y quisiera recibir asesoría sobre sus productos.');window.open('https://wa.me/593967090982?text='+msg,'_blank','noopener')}
 }
 const add=e.target.closest('[data-dereck-add]');
 if(add){const key=add.dataset.dereckAdd;const type=key[0],i=Number(key.slice(1));let item;if(type==='s'){const p=shoes[i];item={key,name:p[1],detail:p[2],price:p[3]}}if(type==='p'){const p=perfumes[i];item={key,name:p[0],detail:'Perfume',price:p[2]}}if(type==='a'){const p=apparel[i];item={key,name:p[0],detail:'Talla '+p[2],price:p[3]}}if(type==='w'){const p=wellness[i];item={key,name:p[0],detail:p[1],price:p[2]}}if(item){addItem(item);add.textContent='Agregado ✓';add.disabled=true}}
});
