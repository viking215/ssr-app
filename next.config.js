module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "graphql-tag/loader",
				},
			],
		});

		return config;
	},
	images: {
		domains: ['encrypted-tbn0.gstatic.com'],
	},
	i18n: {
		locales: ['ae', 'al', 'cn', 'el', 'en', 'fr', 'ge', 'he', 'ja', 'ru', 'sr', 'tr', 'is', 'pl', 'se', 'bg', 'ba',
			'lb', 'sy', 'es', 'fi'],
		defaultLocale: 'ru',
	},
	compiler: {
		styledComponents: true,
	},
};
