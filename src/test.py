from openai import OpenAI
import json
client = OpenAI()


def ask_question():
  # Generate a random passage and ask an open-ended question.
  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "Generate a random passage and ask a grade level 1 reading comprehension, open-ended question."}
    ]
  )

  # Save generated passage for later use
  ai_passage = response.choices[0].message.content
  return ai_passage

def grade_answer(input:str, ai_passage:str):
  # Grade the user's response to the passage.
  response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "user", "content": input},
      {"role": "system", "content": f"You are a grade 1 reading comphrension teacher. State whether I read an answered your previous question correctly or incorrectly based on the your previous passage. Then, explain why the I am right or wrong in grade level 1 terms. Your previous response: {ai_passage}. Format: That's correct/incorrect, the reason being . . .. On a new line, print 1 or 0, where 1 means the user is correct and 0 means the user is incorrect."} 
    ]
  )

  result = response.choices[0].message.content
  return result

def format_answer(ans:str):
  ans = ans.split("\n")
  isCorrect = False
  explanation = ""
  for i in range(len(ans)):
    if(ans[i] == '1'):
      isCorrect = True
    elif(len(ans[i]) > 1):
      explanation = ans[i]
  
  return isCorrect, explanation

def main():
  passage = ask_question()
  print(passage)

  user_input = input()

  # AI output is given as a string with the sign boolean on a new line
  answer_result = grade_answer(user_input, passage)
  answer_tuple = format_answer(answer_result)
  print(answer_tuple[1])   # Print the explanation

  # Print whether the user's answer was correct or not
  if(answer_tuple[0] == True):
    print("Correct!")
  else:
    print("Incorrect!")

main()
