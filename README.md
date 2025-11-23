# Taxi Lucky Rate Dashboard

NYC 택시 데이터를 기반으로 경로별 운행 효율성과 혼잡도를 분석하는 대시보드입니다.

## Project Structure

### Root Directory

- `api/`: Backend code (Flask application)
    - `app.py`: Main entry point for the backend server. Handles API requests and data processing
    - `requirements.txt`: Python dependencies
- `data/`: Data files used by the backend
    - `TLI_FINAL_output.csv`: The main dataset containing TLI scores and duration data
- `frontend/`: Frontend code (React application)
    - `taxiluck-web/`: The main React project directory

### Frontend Directory (`frontend/taxiluck-web/src`)

- `api/`: API handling logic
    - `analyzeRoute.ts`: Functions to call the backend API (currently using mock data)
- `components/`: Reusable UI components
    - `Header.tsx`: Application header
    - `RouteForm.tsx`: Input form for origin, destination, and time
    - `TLISection.tsx`: Displays the Taxi Luck Index (TLI) and Congestion Index (CI)
    - `TimelineSection.tsx`: Displays time-based analysis (past/future slots)
    - `StatsSection.tsx`: Displays average distance and cost
- `mocks/`: Mock data for development and testing
    - `mockData.ts`: Sample data used when the backend is unavailable
- `utils/`: Utility functions
    - `tliUtils.ts`: Helper functions for TLI color coding and time formatting
- `App.tsx`: Main application component that orchestrates the layout and state
- `types.ts`: TypeScript interface definitions for data structures
- `main.tsx`: Entry point for the React application
- `index.css`: Global styles and Tailwind CSS directives

## Backend API Specification (프론트엔드 기준)

프론트엔드에서 요구하는 API 명세입니다. 백엔드 개발 시 이 명세에 맞춰 구현해주세요.

### API Endpoint

- **URL**: `http://localhost:5000/analyze`
- **Method**: `GET`
- **Query Parameters**:
    - `pu_borough`: 출발지 자치구 (예: "Manhattan")
    - `do_borough`: 도착지 자치구 (예: "Bronx")
    - `time`: 시간 (24시간제 "HH:mm" 형식, 예: "15:30")

#### Request Example

```http
GET /analyze?pu_borough=Manhattan&do_borough=Bronx&time=15:30 HTTP/1.1
Host: localhost:5000
```

### Response Data Structure (JSON)

백엔드는 다음 JSON 구조를 반환해야 합니다:

```json
{
  "status": "success",
  "current_match": {
    "tli": 1.2,
    "avg_duration": 15.5,
    "std_duration": 2.1,
    "time": "14:30:00",
    "avg_distance": 12.5,
    "avg_cost": 15.70
  },
  "nearest_past": [
    {
      "tli": 1.1,
      "avg_duration": 16.0,
      "std_duration": 2.0,
      "time": "14:00:00",
      "avg_distance": 12.4,
      "avg_cost": 15.50
    },
    {
      "tli": 1.15,
      "avg_duration": 15.8,
      "std_duration": 2.2,
      "time": "14:15:00",
      "avg_distance": 12.6,
      "avg_cost": 15.80
    }
  ],
  "nearest_future": [
    {
      "tli": 1.3,
      "avg_duration": 14.5,
      "std_duration": 1.9,
      "time": "14:45:00",
      "avg_distance": 12.3,
      "avg_cost": 15.60
    },
    {
      "tli": 1.4,
      "avg_duration": 14.0,
      "std_duration": 1.8,
      "time": "15:00:00",
      "avg_distance": 12.2,
      "avg_cost": 15.40
    }
  ]
}
```

### Response Fields

#### TLIResult 객체 (current_match, nearest_past[], nearest_future[])

| Field | Type | Description |
|-------|------|-------------|
| `tli` | number | Taxi Luck Index (운행 변동성 지표) |
| `avg_duration` | number | 평균 소요 시간 (분) |
| `std_duration` | number | 표준 편차 (분) |
| `time` | string | 시간 ("HH:MM:SS" 형식) |
| `avg_distance` | number | 평균 거리 (마일) |
| `avg_cost` | number | 평균 비용 (USD) |

#### AnalysisResponse 객체

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 응답 상태 ("success" 또는 "error") |
| `current_match` | TLIResult | 입력 시간과 가장 가까운 시간대 데이터 |
| `nearest_past` | TLIResult[] | 과거 시간대 데이터 배열 |
| `nearest_future` | TLIResult[] | 미래 시간대 데이터 배열 |
| `error` | string (optional) | 에러 메시지 (status가 "error"일 때) |

### Frontend Integration

백엔드 API가 준비되면 `frontend/taxiluck-web/src/api/analyzeRoute.ts` 파일에서:
1. `MOCK_ANALYSIS_RESPONSE` 사용 부분을 주석 처리하거나 삭제
2. 주석 처리된 `fetch` 호출 로직을 다시 활성화

### Reference Files

- `frontend/taxiluck-web/src/types.ts`: TypeScript 인터페이스 정의
- `frontend/taxiluck-web/src/mocks/mockData.ts`: Mock Data 예시
