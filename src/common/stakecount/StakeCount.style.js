import styled from "styled-components";

const StakeCountWrapper = styled.div`
margin-bottom: 20px;
    .error_message {
        position: relative;
        display: inline-flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        p{
            position: relative;
            width: 100%;
            float: right;
            font-size: 12px;
            color: red;
            margin: 0 0 0 calc(15px + 70%);
        }
    }
    .miner-container {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 12px;
        .tooltip_header_text {
            padding-left: 15px;
            width: 70%;
            font-size: 19px;
            display: flex;
            text-align: center;
            align-items: center;
            h3{
                margin-right: 5px;
            }
            .tooltip{
                justify-content: center;
                align-items: center;
                text-align:center;
            }
        }
        .count_input {
            flex: 1;
            min-width: 80px;
            height: 40px;
            padding: 0 14px;
            border: 1px solid #FE9C01;
            border-radius: 8px;
            outline: none;
            font-size: 16px;
            font-weight: 500;
            color: white;
            background-color: rgba(43, 2, 0, 0.9);
            transition: border-color 0.3s ease;
            box-sizing: border-box;
        }

        .count_input:focus {
            border-color: #fff;
        }

        .count_input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }

        .max_button {
            width: 60px;
            height: 40px;
            padding: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #BA3505;
            border: 1px solid #FE9C01;
            border-radius: 8px;
            font-weight: bold;
            font-size: 14px;
            color: white;
            cursor: pointer;
            flex-shrink: 0;
        }

        .max_button:hover {
            background-color: #d13d06;
        }

    }
`;

export default StakeCountWrapper;
