export interface ActiveRequest {
    user_id: number,
    first_name:string;
    last_name:string;
    email:string;
    phone:string;
    type:string;
    status:string;
    is_active:boolean;
    new_message: boolean;    
    is_deferred:boolean;
}
