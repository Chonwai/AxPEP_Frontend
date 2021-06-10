const rules = {
    required: value => {
        if (!!value) {
            return true;
        } else {
            window.$nuxt.$store.commit('SET_WARNING', 'Please enter a email address.');
            return false;
        }
    },
    counter: value => {
        if (value.length <= 255) {
            return true;
        } else {
            window.$nuxt.$store.commit('SET_WARNING', 'Max 255 characters');
            return false;
        }
    },
    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(value)) {
            return true;
        } else {
            window.$nuxt.$store.commit('SET_WARNING', 'Please enter a correct email address.');
            return false;
        }
    },
    fasta: value => {
        if (typeof value === 'string') {
            return true;
        } else {
            if (value.size <= 1024 * 1024) {
                return true;
            } else {
                window.$nuxt.$store.commit(
                    'SET_WARNING',
                    'The FASTA file is too big! Please upload small than 1MB FASTA file.'
                );
                return false;
            }
        }
    },
    smi: value => {
        if (typeof value === 'string') {
            return true;
        } else {
            if (value.size <= 1024 * 1024) {
                return true;
            } else {
                window.$nuxt.$store.commit(
                    'SET_WARNING',
                    'The SMI file is too big! Please upload small than 1MB SMI file.'
                );
                return false;
            }
        }
    },
};

export default rules;
