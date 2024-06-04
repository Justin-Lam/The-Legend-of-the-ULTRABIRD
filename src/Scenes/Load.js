class Load extends Phaser.Scene
{
	constructor()
	{
		super('loadScene')
	}

	preload()
	{
		// Set load path
		this.load.path = './assets/';

		this.load.image("Player", "Player_temp.png");
		this.load.image("Net Swipe", "Net Swipe_temp.png");
		this.load.image("Bread", "Bread_temp.png");
		this.load.image("Enemy1", "Enemy1_temp.png");
		this.load.image("Enemy2", "Enemy2_temp.png");
		this.load.image("Enemy Poop", "Enemy Poop_temp.png");
		this.load.image("Enemy3", "Enemy3_temp.png");

		// Load map tilesets
		this.load.image("urban_tiles", "urban_tilemap_packed_bigger.png"); 
		this.load.image("rpg_tiles", "roguelikeSheet_transparent.png"); 
		this.load.image("shmup_tiles", "shmup_tiles_packed.png"); 
		this.load.image("town_tiles", "town_tilemap_packed.png"); 

		// Custom merged tilesets
		this.load.image("floor_tiles", "flooring_tileset.png"); 

		this.load.tilemapTiledJSON("basic-level-alt", "basic-level-alt.tmj");
	}

	create()
	{
		// Start the first scene
		this.scene.start("testScene")
	}
}