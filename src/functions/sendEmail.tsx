import emailjs from '@emailjs/browser';

export const sendEmail = async (
    templateParams: { [key: string]: string },
    publicKey: string,
    serviceId: string,
    templateId: string
): Promise<string> => {
    try {
        const response = await emailjs.send("service_kzwj795","template_qs4345n",templateParams,publicKey);

        return `Email sent successfully`;
    } catch (error) {
        throw new Error(`Failed to send email: ${(error as Error).message}`);
    }
};
