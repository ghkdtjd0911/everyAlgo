// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Every Algorithm',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'アルゴリズム基本',
					autogenerate: { directory: 'basic' },
				},
				{
					label: 'データ構造',
					autogenerate: { directory: 'datastructure' },
				},
				{
					label: 'ソートアルゴリズム',
					autogenerate: { directory: 'sort' },
				},
			],
		}),
	],
});
