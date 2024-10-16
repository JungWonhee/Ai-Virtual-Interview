// src/components/api/openaiApi.js
import axios from 'axios';

const API_KEY = 'your-openai-api-key';  // 발급받은 API 키를 여기에 추가하세요

export const evaluateAnswerWithChatGPT = async (question, answer) => {
  const prompt = `질문: ${question}\n답변: ${answer}\n이 답변을 평가해주세요.`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // 또는 gpt-3.5-turbo 등 적절한 모델 선택
        prompt: prompt,
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    const evaluation = response.data.choices[0].text.trim();
    return evaluation;
  } catch (error) {
    console.error('Error evaluating answer with ChatGPT:', error);
    throw new Error('ChatGPT API 호출 실패');
  }
};
