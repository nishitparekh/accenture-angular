
export interface IEmail {
    mId: string;
    sender: string;
    time: string;
    unread: boolean;
    subject: string;
    content: string;
    // selected: boolean;
    flagged: boolean;
}
