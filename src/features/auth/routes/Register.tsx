import { Card, Typography, Input, Button } from '@material-tailwind/react'
import { useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRegisterMutation } from '../stores/useAuth'

interface FormValues {
  email: string
  password: string
  firstName: string
  lastName: string
}

const Register = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
  })

  const [postUser] = useRegisterMutation()

  const onSubmit: SubmitHandler<FormValues> = useCallback((data) => postUser(data), [postUser])

  return (
    <div className='container mx-auto flex items-center h-full'>
      <Card className='w-full max-w-xl mx-auto p-4'>
        <Typography variant='h4' component='h1' className='text-center'>
          Create a user
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label='First name' type='text' {...register('firstName')} />
          <div className='mb-4' />
          <Input label='Last name' type='text' {...register('lastName')} />
          <div className='mb-4' />
          <Input label='Email' type='email' {...register('email')} />
          <div className='mb-4' />
          <Input label='Password' type='password' {...register('password')} />
          <div className='mb-4' />
          <Button type='submit' className='w-full'>
            Create
          </Button>
        </form>
      </Card>
    </div>
  )
}

export { Register }
