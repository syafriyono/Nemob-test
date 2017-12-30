game.CoinEntity = me.CollectableEntity.extend({
	init: function (x, y, settings){
		this._super(me.CollectableEntity, 'init', [x, y, settings]);
	},

	onCollision: function (response, other) {
		//give score
		game.data.score += 100;
		//make sure it can't be collected again
		this.body.setCollisionMask(me.collision.types.NO_OBJECT);

		//remove it
		me.game.world.removeChild(this);

		return true;
	}
});