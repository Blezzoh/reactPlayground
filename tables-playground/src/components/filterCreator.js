
/**
 * this class is modeled after react query builder
 */
export default class fitlerCreator {
    /**
     * 
     * @param {string} name - name of the filter
     * @param {enum} combinator - either 'or' or 'and'
     */
    constructor(name, combinator){
        this.name = name
        this.combinator = combinator ? combinator : 'or'
        this.rules =[]
        this.operators = {
            1: '=',
            2: '>',
            3: '<',
            4:'<=',
            5:'>='
        }
    }
   /**
    * 
    * @param {string} field - object field
    * @param {string} value - object value
    * @param {number} operatorId - on of the 5 possible operators 1 , 2, 3, 4, 5
    */
    addRule( field, value, operatorId){
        this.rules = [...this.rules, {field, value,operator: operatorId && this.operators[operatorId]? this.operators[operatorId]: this.operators['1']}]
    }
    getPossibeOperators(){
        return this.operators
    }
    getRules(){
        return {
            name: this.name,
            rules: this.rules,
            combinator: this.combinator
        }
    }
    /**
     * return filtered data
     * @param {Array} data - array of Jsons to be filtered
     */
    appylFilter(data){
        const whichOperator = this.combinator === 'and' ? 2 : 1
        return data.filter(
            (d) => {
                return this.applySingleFilter(d, whichOperator)
            }
        )
    }
    applySingleFilter(obj, filterId){
        if(filterId === 1){
            for (const filter of this.rules) {
                return this.applyFilterSign(obj[filter.field] , filter.value, this.operators(filter.operator))
            }
            return false
        }
        else{
            for (const filter of this.rules) { 
                if(!this.applyFilterSign(obj[filter.field] , filter.value, this.operators(filter.operator))) return false
            }
            return true
        }
    }
    applyFilterSign(value1, value2, operatorId){
        if(operatorId === 1){
            return value1 === value2
        }
        if(operatorId === 2){
            return value1 > value2
        }
        if(operatorId === 3){
            return value1 < value2
        }
        if(operatorId === 4){
            return value1 <= value2
        }
        if(operatorId === 5){
            return value1 >= value2
        }
    }

}
