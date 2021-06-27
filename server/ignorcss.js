module.exports = function ({ types: babelTypes }) {
    return {
        name: "no-require-css",
        visitor: {
            ImportDeclaration(path,state) {
                let importFile = path.node.source.value;
                let ignoretype = state.opts.ignore||['.css','.scss']
                ignoretype.forEach(type => {
                    if(importFile.indexOf(type)>-1){
                        // 干掉css 导入
                        path.remove();
                    }
                });
               
            }
        }
    };
};
