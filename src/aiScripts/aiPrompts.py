from openai import OpenAI

client = OpenAI(
    api_key="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"
)

def chat_gpt(prompt):
    chat_completion = client.chat.completions.create(
        messages = [
            {
                "role":"user",
             "content":prompt
             },    
        ],
        model="gpt-3.5-turbo"
    )

    return  chat_completion.choices[0].message.content

def getStartingPrompt(subject:str):
    returns = []
    if subject.lower() == "english":
        prompt = "Give a essay that a first grader could read"
        startingPrompt = chat_gpt(prompt)
        returns.append(startingPrompt)
        prompt2 = f"give questions in a python list that you could ask {startingPrompt} that 5 questions and lists inside those of 4 multiple choice questions and with a final list of the correct answers"
        returns.append(prompt2)
        return returns