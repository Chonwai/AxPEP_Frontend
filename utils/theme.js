class ThemesUtils {
    static get default() {
        return {
            name: 'default',
            light: {
                primary: '#1976D2',
                accent: '#82B1FF',
                secondary: '#424242',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }

    static get ampep() {
        return {
            name: 'ampep',
            light: {
                primary: '#3f51b5',
                accent: '#8c9eff',
                secondary: '#b0bec5',
                success: '#4CAF50',
                info: '#663399',
                warning: '#FB8C00',
                error: '#b71c1c',
            },
        };
    }

    static get acpep() {
        return {
            name: 'acpep',
            light: {
                primary: '#fe6e00',
                accent: '#fd5602',
                secondary: '#ff8303',
                success: '#ff8303',
                info: '#ffaf42',
                warning: '#FB8C00',
                error: '#b71c1c',
            },
        };
    }

    static get bestox() {
        return {
            name: 'bestox',
            light: {
                primary: '#1C2833',
                accent: '#b6babf',
                secondary: '#0f5d82',
                success: '#0d445f',
                info: '#87a8b7',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }

    static get blog() {
        return {
            name: 'default',
            light: {
                primary: '#06cc98',
                accent: '#d8c960',
                secondary: '#049068',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }

    static get ecotoxicology() {
        return {
            name: 'ecotoxicology',
            light: {
                primary: '#78e4ff', // 原始 '#1C2833'
                accent: '#80e5ff', // 原始 '#b6babf'
                secondary: '#70e2ff', // 原始 '#0f5d82'
                success: '#68e0ff', // 原始 '#0d445f'
                info: '#99eaff', // 原始 '#87a8b7'
                warning: '#88e7ff', // 原始 '#FB8C00'
                error: '#90e9ff', // 原始 '#FF5252'
            },
        };
    }

    static get hemopep() {
        return {
            name: 'hemopep',
            light: {
                primary: '#8b0000', // 深紅色，代表溶血性
                accent: '#ff6b6b',
                secondary: '#d32f2f',
                success: '#4CAF50',
                info: '#b71c1c',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }
}

export default ThemesUtils;
