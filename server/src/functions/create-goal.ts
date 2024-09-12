import { db } from '../db'
import { goals } from '../db/schema'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}
export async function createGoal(request: CreateGoalRequest) {
  const result = await db.insert(goals).values([request]).returning()

  const goal = result[0]

  return { goal, message: 'Goal created successfully' }
}
