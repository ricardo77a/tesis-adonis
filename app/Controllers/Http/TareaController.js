'use strict'
const Tarea = use('App/Models/Tarea')


 class TareaController {

   async index ({ request, response, view }) {
   	const tareas = await Tarea.all()
      return view.render('tarea.index', {
         tareas: tareas.toJSON()
      })
   }

   async create ({ view }) {
      return view.render('tarea.create')
   }

   async store ({ request, response }) {
      const tarea = new Tarea()
      tarea.tarea = request.input('tarea')
      tarea.descripcion = request.input('descripcion')
      await tarea.save()
      return response.redirect('/tarea')
   }

   async show ({ params, request, response, view }) {
      const tarea = await Tarea.find(params.id)
      return view.render('tarea.show', {
         tarea: tarea
      })
   }

   async edit ({ params, request, response, view }) {
      const tarea = await Tarea.find(params.id)
      return view.render('tarea.edit', {
         tarea
      })
   }

   async update ({ params, request, response }) {
      const tarea = await Tarea.find(params.id)
      tarea.tarea = request.input('tarea')
      tarea.descripcion = request.input('descripcion')
      await tarea.save()
      return response.redirect('/tarea')
   }

   async destroy ({ params, request, response }) {
      const tarea = await Tarea.find(params.id)
      tarea.tarea = request.input('tarea')
      tarea.descripcion = request.input('descripcion')
      await tarea.delete()
      return response.redirect('/tarea')
   }
}

module.exports = TareaController
