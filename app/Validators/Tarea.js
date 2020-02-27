'use strict'

class Tarea {
	get rules () {
		return {
			tarea: 'required',
      		descripcion: 'required'
  		}
	}

	get messages(){
		return{
			'tarea.required': 'Debes escribir una tarea.',
			'descripcion.required': 'No olvides escribir una descripción de la tarea.'
		}
	}
}

module.exports = Tarea
