// Another Quality Modpack 2 //
//////////////////////////////
// const disableInfo = [ ----- Using Hide instead 
// 'prefab:item_swift_blade_bronze',
// 'prefab:item_swift_blade_copper',
// 'prefab:item_swift_blade_diamond',
// 'prefab:item_swift_blade_gold',
// 'prefab:item_swift_blade_iron',
// 'prefab:item_swift_blade_netherite',
// 'prefab:item_swift_blade_obsidian',
// 'prefab:item_swift_blade_osmium',
// 'prefab:item_swift_blade_steel',
// 'prefab:item_swift_blade_stone',
// 'prefab:item_swift_blade_wood',
// 'givemehats:bunny_space_helmet',
// 'givemehats:strider_hat',
// 'givemehats:irish_hat',
// 'givemehats:dwarven_hat',
// 'givemehats:jojo_hat',
// 'givemehats:viking_hat',
// 'givemehats:hippie_vibes',
// 'botania:dice',
// 'botania:infinite_fruit',
// 'botania:king_key',
// 'botania:flugel_eye',
// 'botania:thor_ring',
// 'botania:odin_ring',
// 'botania:loki_ring'
// ];

const greenhouseColors =[
    "white",
    "magenta",
    "orange",
    "light_blue",
    "yellow",
    "green",
    "pink",
    "gray",
    "lime",
    "blue",
    "light_gray",
    "cyan",
    "purple",
    "brown",
    "red",
    "black"
  ];

onEvent('rei.information', event => {

  event.addItem('croparia:greenhouse', 'WARNING', ['You will crash and corrupt chunk if you use this on modded crops'])

  greenhouseColors.forEach(function(item, index) {
    event.addItem('croparia:greenhouse_' + item, 'WARNING', ['You will crash and corrupt chunk if you use this on modded crops'])
  });
});

onEvent('rei.hide.items', event => { 
  event.hide("croparia:greenhouse")
  greenhouseColors.forEach(function(item,index) {
    event.hide( "croparia:greenhouse_" + item)
  })
})