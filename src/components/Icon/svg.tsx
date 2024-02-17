import { systemColor } from "styles/theme";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const PolicySvg = ({
  fill = systemColor.black,
  width = 16,
  height = 17,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M2.5 7.33379V3.66504C2.5 3.53243 2.55268 3.40525 2.64645 3.31149C2.74021 3.21772 2.86739 3.16504 3 3.16504H13C13.1326 3.16504 13.2598 3.21772 13.3536 3.31149C13.4473 3.40525 13.5 3.53243 13.5 3.66504V7.33379C13.5 12.5838 9.04375 14.3213 8.15625 14.615C8.05543 14.6524 7.94457 14.6524 7.84375 14.615C6.95625 14.3213 2.5 12.5838 2.5 7.33379Z"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 6.16504V8.66504"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 11.665C8.41421 11.665 8.75 11.3293 8.75 10.915C8.75 10.5008 8.41421 10.165 8 10.165C7.58579 10.165 7.25 10.5008 7.25 10.915C7.25 11.3293 7.58579 11.665 8 11.665Z"
      fill={fill}
    />
  </svg>
);

const UsersSvg = ({
  fill = systemColor.black,
  width = 18,
  height = 19,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M8.9998 8.26523C9.71589 8.26523 10.4026 7.98077 10.909 7.47442C11.4153 6.96807 11.6998 6.28132 11.6998 5.56523C11.6998 4.84915 11.4153 4.16239 10.909 3.65605C10.4026 3.1497 9.71589 2.86523 8.9998 2.86523C8.28372 2.86523 7.59696 3.1497 7.09061 3.65605C6.58426 4.16239 6.2998 4.84915 6.2998 5.56523C6.2998 6.28132 6.58426 6.96807 7.09061 7.47442C7.59696 7.98077 8.28372 8.26523 8.9998 8.26523ZM5.3998 7.36523C5.3998 7.84262 5.21016 8.30046 4.87259 8.63803C4.53503 8.97559 4.07719 9.16523 3.5998 9.16523C3.12241 9.16523 2.66457 8.97559 2.32701 8.63803C1.98944 8.30046 1.7998 7.84262 1.7998 7.36523C1.7998 6.88785 1.98944 6.43001 2.32701 6.09244C2.66457 5.75488 3.12241 5.56523 3.5998 5.56523C4.07719 5.56523 4.53503 5.75488 4.87259 6.09244C5.21016 6.43001 5.3998 6.88785 5.3998 7.36523ZM1.3408 13.9586C1.18716 13.8713 1.0721 13.7293 1.0186 13.5608C0.860027 13.0472 0.858364 12.498 1.01383 11.9834C1.16929 11.4689 1.4748 11.0124 1.89123 10.6726C2.30767 10.3327 2.81608 10.1248 3.35135 10.0756C3.88662 10.0265 4.42439 10.1381 4.8958 10.3964C3.92707 11.3484 3.32074 12.6085 3.1813 13.9595C3.1606 14.1593 3.1687 14.3573 3.2038 14.5481C2.54695 14.4913 1.91077 14.29 1.3408 13.9586ZM14.7958 14.5472C15.4526 14.4907 16.0888 14.2897 16.6588 13.9586C16.8121 13.8711 16.9268 13.7291 16.9801 13.5608C17.1389 13.0472 17.1408 12.4978 16.9854 11.9831C16.8301 11.4683 16.5246 11.0117 16.1081 10.6717C15.6916 10.3317 15.1831 10.1238 14.6477 10.0746C14.1123 10.0254 13.5744 10.1371 13.1029 10.3955C14.0725 11.3475 14.6795 12.6079 14.8192 13.9595C14.8393 14.1559 14.8314 14.354 14.7958 14.5481V14.5472ZM16.1998 7.36523C16.1998 7.84262 16.0102 8.30046 15.6726 8.63803C15.335 8.97559 14.8772 9.16523 14.3998 9.16523C13.9224 9.16523 13.4646 8.97559 13.127 8.63803C12.7894 8.30046 12.5998 7.84262 12.5998 7.36523C12.5998 6.88785 12.7894 6.43001 13.127 6.09244C13.4646 5.75488 13.9224 5.56523 14.3998 5.56523C14.8772 5.56523 15.335 5.75488 15.6726 6.09244C16.0102 6.43001 16.1998 6.88785 16.1998 7.36523ZM4.7734 14.7362C4.68464 14.6567 4.61583 14.5575 4.57252 14.4465C4.52921 14.3355 4.51263 14.2158 4.5241 14.0972C4.63858 12.9898 5.15954 11.9641 5.98629 11.2184C6.81305 10.4727 7.88688 10.0599 9.00025 10.0599C10.1136 10.0599 11.1875 10.4727 12.0142 11.2184C12.841 11.9641 13.3619 12.9898 13.4764 14.0972C13.4879 14.2158 13.4714 14.3355 13.4281 14.4465C13.3848 14.5575 13.3159 14.6568 13.2271 14.7362C12.0699 15.7865 10.5625 16.3673 8.9998 16.3652C7.43735 16.3672 5.93034 15.7864 4.7734 14.7362Z"
      fill={fill}
    />
  </svg>
);

const FilterSvg = ({
  width = 17,
  height = 16,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <g clip-path="url(#clip0_1_51452)">
      <path
        d="M5.83317 5.33325H3.1665V7.99992H5.83317V5.33325Z"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 2.66675V5.33341"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 8V13.3333"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.83317 9.33325H7.1665V11.9999H9.83317V9.33325Z"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 2.66675V9.33341"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.5 12V13.3333"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.8332 3.33325H11.1665V5.99992H13.8332V3.33325Z"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 2.66675V3.33341"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 6V13.3333"
        stroke="#3A3B3C"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_51452">
        <rect width="16" height="16" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const WarningSvg = ({
  width = 81,
  height = 80,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <g clip-path="url(#clip0_10_24573)">
      <path
        d="M40.5 70C57.0685 70 70.5 56.5685 70.5 40C70.5 23.4315 57.0685 10 40.5 10C23.9315 10 10.5 23.4315 10.5 40C10.5 56.5685 23.9315 70 40.5 70Z"
        stroke="#618264"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.5 26.6667V40.0001"
        stroke="#618264"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.5 53.3333H40.5333"
        stroke="#618264"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10_24573">
        <rect width="80" height="80" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const DeleteSvg = ({
  width = 25,
  height = 24,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M20.75 5.25H4.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.25 9.75V15.75"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.75 9.75V15.75"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.25 5.25V19.5C19.25 19.6989 19.171 19.8897 19.0303 20.0303C18.8897 20.171 18.6989 20.25 18.5 20.25H6.5C6.30109 20.25 6.11032 20.171 5.96967 20.0303C5.82902 19.8897 5.75 19.6989 5.75 19.5V5.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.25 5.25V3.75C16.25 3.35218 16.092 2.97064 15.8107 2.68934C15.5294 2.40804 15.1478 2.25 14.75 2.25H10.25C9.85218 2.25 9.47064 2.40804 9.18934 2.68934C8.90804 2.97064 8.75 3.35218 8.75 3.75V5.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const UnlockSvg = ({
  width = 25,
  height = 24,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M12.5 15C13.5355 15 14.375 14.1605 14.375 13.125C14.375 12.0895 13.5355 11.25 12.5 11.25C11.4645 11.25 10.625 12.0895 10.625 13.125C10.625 14.1605 11.4645 15 12.5 15Z"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 15V17.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 8.25H5C4.58579 8.25 4.25 8.58579 4.25 9V19.5C4.25 19.9142 4.58579 20.25 5 20.25H20C20.4142 20.25 20.75 19.9142 20.75 19.5V9C20.75 8.58579 20.4142 8.25 20 8.25Z"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.125 8.25V4.875C9.125 3.97989 9.48058 3.12145 10.1135 2.48851C10.7465 1.85558 11.6049 1.5 12.5 1.5C13.3951 1.5 14.2535 1.85558 14.8865 2.48851C15.5194 3.12145 15.875 3.97989 15.875 4.875"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const LockSvg = ({
  width = 25,
  height = 24,
}: Partial<CustomIconComponentProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
  >
    <path
      d="M12.5 15C13.5355 15 14.375 14.1605 14.375 13.125C14.375 12.0895 13.5355 11.25 12.5 11.25C11.4645 11.25 10.625 12.0895 10.625 13.125C10.625 14.1605 11.4645 15 12.5 15Z"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 15V17.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 8.25H5C4.58579 8.25 4.25 8.58579 4.25 9V19.5C4.25 19.9142 4.58579 20.25 5 20.25H20C20.4142 20.25 20.75 19.9142 20.75 19.5V9C20.75 8.58579 20.4142 8.25 20 8.25Z"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.125 8.25V4.875C9.125 3.97989 9.48058 3.12145 10.1135 2.48851C10.7465 1.85558 11.6049 1.5 12.5 1.5C13.3951 1.5 14.2535 1.85558 14.8865 2.48851C15.5194 3.12145 15.875 3.97989 15.875 4.875V8.25"
      stroke="#534E54"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export {
  PolicySvg,
  UsersSvg,
  FilterSvg,
  WarningSvg,
  DeleteSvg,
  UnlockSvg,
  LockSvg,
};
