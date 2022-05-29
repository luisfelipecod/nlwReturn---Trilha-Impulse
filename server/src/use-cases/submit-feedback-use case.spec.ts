import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbacksSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbacksSpy },
    { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
   it('should be able to submit a feedback', async () =>{
       

        await expect(submitFeedback.execute({
            type:'BUG',
            comment:'example comment',
            screenshot:'data:image/png;base64,87869f87a98fa9fy79y',
        })).resolves.not.toThrow();

        expect(createFeedbacksSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
   }) ;

   it('should not be able submit a feedback without type ', async () =>{
    await expect(submitFeedback.execute({
        type:'',
        comment:'example comment',
        screenshot:'data:image/png;base64,87869f87a98fa9fy79y',
    })).rejects.toThrow();
}) ;

   it('should not be able submit a feedback without comment ', async () =>{
    await expect(submitFeedback.execute({
        type:'BUG',
        comment:'',
        screenshot:'data:image/png;base64,87869f87a98fa9fy79y',
    })).rejects.toThrow();
}) ;

   it('should not be able submit a feedback with an invalid screenshot  ', async () =>{
    await expect(submitFeedback.execute({
        type:'BUG',
        comment:'ta tudo bugado',
        screenshot:'test.jpg',
    })).rejects.toThrow();
}) ;


});