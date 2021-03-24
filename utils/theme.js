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
                primary: '#FFD700',
                accent: '#e91e63',
                secondary: '#30b1dc',
                success: '#4CAF50',
                info: '#663399',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }

    static get acpep() {
        return {
            name: 'acpep',
            light: {
                primary: '#c0d9c2',
                accent: '#edf3e9',
                secondary: '#808077',
                success: '#86af3f',
                info: '#88b2aa',
                warning: '#faeaa1',
                error: '#FF5252',
            },
        };
    }

    static get bestox() {
        return {
            name: 'bestox',
            light: {
                primary: '#21CFF3',
                accent: '#FF4081',
                secondary: '#ffe18d',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252',
            },
        };
    }
}

export default ThemesUtils;
