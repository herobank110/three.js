import {
	BufferGeometry,
	FileLoader,
	Float32BufferAttribute,
	Group,
	Loader,
	Points,
	PointsMaterial,
} from 'three';

class PC2Loader extends Loader {

	constructor( manager ) {

		super( manager );

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		const loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );
		loader.load( url, function ( text ) {

			try {

				onLoad( scope.parse( text ) );

			} catch ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );

			}

		}, onProgress, onError );

	}

	parse( text ) {

		const container = new Group();

        const material = new PointsMaterial( { size: 1, sizeAttenuation: false } );

        const buffergeometry = new BufferGeometry();

        buffergeometry.setAttribute( 'position', new Float32BufferAttribute( state.vertices, 3 ) );

        const points = new Points( buffergeometry, material );
        container.add( points );

		return container;

	}

}

export { PC2Loader };
