from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a reading comprehension assistant, you generate a random passage and reading comprehension question based on skill level assigned by the user. You will then grade the user's reading compression by stating if the answer is correct or not and why."},
    {"role": "user", "content": "Answer the reading comprehension question given by the system."}
  ]
)

print(completion.choices[0].message['content'])
input = input()

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": input},
    {"role": "system", "content": "The answer is correct or wrong because..."}
  ]
)

print(completion.choices[1].message['content'])


