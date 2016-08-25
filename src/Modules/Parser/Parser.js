/**
 * Classe base para os parsers de linguagem
 * Metodos devem ser reescritos na classe herdeira
 */

/**
 * Recebe um JSON com um pattern da linguagem
 * @type {Parser}
 */
var Parser = new function (patternJSON) {
   this._Pattern = JSON.parse(patternJSON);
};

/**
 * Metodo para parse de 'Classes'
 * @param classJson
 */
Parser.prototype.parseClass = function (classJson) {
   console.log("Override this method in child class");
};

/**
 * Metodo para parse dos atributos de classe
 * @param attributesJson
 */
Parser.prototype.parseClassAttributes = function (attributesJson) {
   console.log("Override this method in child class");
};

/**
 * Metodo para parse de documentacao de Classe
 * @param classDocsJson
 */
Parser.prototype.parseClassDocs = function (classDocsJson) {
   console.log("Override this method in child class");
};

/**
 * Metodo para parse de 'Metodos'
 * @param methodJson
 */
Parser.prototype.parseMethod = function (methodJson) {
   console.log("Override this method in child class");
};


/**
 * Metodo para parse de documentacao de Metodo
 * @param methodDocsJson
 */
Parser.prototype.parseMethodDocs = function (methodDocsJson) {
   console.log("Override this method in child class");
};
