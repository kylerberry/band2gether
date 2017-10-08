module.exports = {
	syntax: 'postcss-scss',
	from: '/app/styles/*/*.css',
	to: '/dist/bundle.css',
    plugins: [
    	//pre
    	require('precss'),
        require('autoprefixer'),

        //post
        require('cssnano')
    ]
}