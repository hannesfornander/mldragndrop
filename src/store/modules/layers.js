
const state = {
    selectedLayers: [{name: 'Drag here'}],
    availableLayers: [
        {
        name: 'Dense',
        parameters: [
            {pName: 'units', pValue: ''},
            {pName: 'activation', pValue: 'None'},
            {pName: 'use_bias', pValue: 'True'},
            {pName: 'kernel_initializer', pValue: 'glorot_uniform'},
            {pName: 'bias_initializer', pValue: 'zeros'},
            {pName: 'kernel_regularizer', pValue: 'None'},
            {pName: 'bias_regularizer', pValue: 'None'},
            {pName: 'activity_regularizer', pValue: 'None'},
            {pName: 'kernel_constraint', pValue: 'None'},
            {pName: 'bias_constraint', pValue: 'None'},
        ],
        selected: false
        },
        {
        name: 'Conv2D',
        parameters: [
            {pName: 'filters', pValue: ''},
            {pName: 'kernel_size', pValue: ''},
            {pName: 'strides', pValue: '(1, 1)'},
            {pName: 'padding', pValue: 'valid'},
            {pName: 'data_format', pValue: 'None'},
            {pName: 'dilation_rate', pValue: '(1, 1)'},
            {pName: 'activation', pValue: 'None'},
            {pName: 'use_bias', pValue: 'True'},
            {pName: 'kernel_initializer', pValue: 'glorot_uniform'},
            {pName: 'bias_initializer', pValue: 'zeros'},
            {pName: 'kernel_regularizer', pValue: 'None'},
            {pName: 'bias_regularizer', pValue: 'None'},
            {pName: 'activity_regularizer', pValue: 'None'},
            {pName: 'kernel_constraint', pValue: 'None'},
            {pName: 'bias_constraint', pValue: 'None'}
        ],
        selected: false
        },
        {
        name: 'MaxPooling2D',
        parameters: [
            {pName: 'pool_size', pValue: '(2, 2)'},
            {pName: 'strides', pValue: 'None'},
            {pName: 'padding', pValue: 'valid'},
            {pName: 'data_format', pValue: 'None'}
        ],
        selected: true
        }
    ]
}

const getters = {
    selectedLayers: state => state.selectedLayers,
    availableLayers: state => state.availableLayers,
    selectedLayer: state => {
        return state.availableLayers.find(layer => layer.selected)
    }
}

const actions = {}

const mutations = {
    selectLayer(state, layer) {
        for (let i = 0; i < state.availableLayers.length; i++) {
            state.availableLayers[i].selected = false;
        }
        for (let i = 0; i < state.selectedLayers.length; i++) {
            state.selectedLayers[i].selected = false;
        }
        layer.selected = true;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}