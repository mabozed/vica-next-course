'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { DOMAIN } from '@/utils/constants'
import { useRouter } from 'next/navigation'

const AddArticleForm = () => {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (title === '') return toast.error('Title is required')
    if (description === '') return toast.error('Description is required')

    try {
      await axios.post(`${DOMAIN}/api/articles`, { title, description })
      setTitle('')
      setDescription('')
      toast.success('New article added')
      router.refresh()
    } catch (error: any) {
      toast.error(error?.response?.data.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col bg-slate-300">
      <input
        className="mb-4 border rounded p-2 text-xl bg-slate-100"
        type="text"
        placeholder="Enter Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 p-2 lg:text-xl rounded resize-none bg-slate-100"
        rows={5}
        placeholder="Enter Artilce Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="text-2xl text-white bg-primary hover:bg-[#2d323b] p-2 rounded-lg font-bold"
      >
        Add
      </button>
    </form>
  )
}

export default AddArticleForm
