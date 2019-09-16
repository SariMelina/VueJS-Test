var app = new Vue({
    el: '.vue',
    data:{
        mensaje: 'Este es un mensaje. ¿por qué puse'
    },
    beforeCreate: function(){
        console.log('Llamanco al beforeCreate');
    },
    created: function(){
        console.log('Llamando a Created0');
    },
    beforeMount: function(){
        console.log("llamando a before mount");
    },
    mounted : function(){
        console.log("llamando a mounted");
    },
    beforeUpdate: function(){
        console.log("llamando a before update");
    },
    updated : function(){
        console.log("llamando a update");
    },
    beforeDestroy: function(){
        console.log("llamando a before destroy");
    },
    destroyed: function(){
        console.log("llmando a destroyed");
    },
    methods :{
        destruir : function() {
            this.$destroy();
        }
    }
})