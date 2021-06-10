export const state = () => ({
    warning: null,
});

export const mutations = {
    SET_WARNING(state, value) {
        state.warning = value;
    },
};
