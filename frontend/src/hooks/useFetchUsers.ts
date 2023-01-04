/* eslint-disable @typescript-eslint/space-before-function-paren */
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface FakeUsersApiResponse {
  results: UserDTO[]
}

interface UserDTO {
  picture: {
    medium: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  login: {
    username: string
  }
  dob: {
    age: number
  }
}

interface UseFetchUsersResponse {
  users: UserDTO[]
  loading: boolean
  handleNextPage: () => void
  handlePreviousPage: () => void
  currentPage: number
}

const API_URL = 'https://randomuser.me/api/'
const RESULTS_PER_PAGE = 20

export function useFetchUsers(): UseFetchUsersResponse {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState<UserDTO[]>([])

  const { page = 1 } = useParams()

  const currentPage = Number(page)

  const navigate = useNavigate()

  const handleNextPage = (): void => {
    navigate(`/users/${currentPage + 1}`)
  }

  const handlePreviousPage = (): void => {
    if (currentPage === 1) return

    navigate(`/users/${currentPage - 1}`)
  }

  useEffect(() => {
    async function fetchFakeUsersData(): Promise<void> {
      const response = await fetch(`${API_URL}?page=${currentPage}&results=${RESULTS_PER_PAGE}&seed=abc`)
      const fakeUsers = await response.json() as FakeUsersApiResponse

      setUsers(fakeUsers.results)
    }

    fetchFakeUsersData()
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  return {
    users,
    loading,
    handleNextPage,
    handlePreviousPage,
    currentPage
  }
}
