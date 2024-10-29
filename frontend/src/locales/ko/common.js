const TRANSLATIONS = {
  common: {
    "workspaces-name": "워크스페이스 이름",
    error: "오류",
    success: "성공",
    user: "사용자",
    selection: "모델 선택",
    saving: "저장 중...",
    save: "저장",
    previous: "이전",
    next: "다음",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "인스턴스 설정",
    system: "일반 설정",
    invites: "초대",
    users: "사용자",
    workspaces: "워크스페이스",
    "workspace-chats": "워크스페이스 채팅",
    customization: "사용자 정의",
    "api-keys": "개발자 API",
    llm: "LLM",
    transcription: "텍스트 변환",
    embedder: "임베더",
    "text-splitting": "텍스트 분할과 청킹",
    "voice-speech": "음성과 말하기",
    "vector-database": "벡터 데이터베이스",
    embeds: "채팅 임베드",
    "embed-chats": "채팅 임베드 기록",
    security: "보안",
    "event-logs": "이벤트 로그",
    privacy: "사생활 보호와 데이터",
    "ai-providers": "AI 제공자",
    "agent-skills": "에이전트 스킬",
    admin: "관리자",
    tools: "도구",
    "experimental-features": "실험적 기능",
    contact: "지원팀 연락",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "웰컴!",
      "placeholder-username": "사용자 이름",
      "placeholder-password": "비밀번호",
      login: "로그인",
      validating: "유효성 검사 중...",
      "forgot-pass": "비밀번호를 잊으셨나요",
      reset: "재설정",
    },
    "sign-in": {
      start: "사용자 계정으로 ",
      end: "에 로그인하세요.",
    },
    "password-reset": {
      title: "비밀번호 재설정",
      description: "비밀번호를 재설정하려면 아래에 필요한 정보를 입력하세요.",
      "recovery-codes": "복구 코드",
      "recovery-code": "복구 코드 {{index}}",
      "back-to-login": "로그인으로 돌아가기",
    },
  },

  "new-workspace": {
    title: "새 워크스페이스",
    placeholder: "내 워크스페이스",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "일반 설정",
    chat: "채팅 설정",
    vector: "벡터 데이터베이스",
    members: "구성원",
    agent: "에이전트 구성",
  },

  welcomeMessage: {
    part1:
      "AnythingLLM에 오신 것을 환영합니다. AnythingLLM은 Mintplex Labs에서 개발한 오픈 소스 AI 도구로, 어떤 것이든 훈련된 챗봇으로 변환하여 쿼리하고 대화할 수 있습니다. AnythingLLM은 BYOK(Bring Your Own Key) 소프트웨어이므로 사용하려는 서비스 외에는 구독료나 기타 비용이 없습니다.",
    part2:
      "AnythingLLM은 OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB 등 강력한 AI 제품을 번거로움 없이 깔끔하게 패키지로 묶어 생산성을 100배 향상시키는 가장 쉬운 방법입니다.",
    part3:
      "AnythingLLM은 로컬 컴퓨터에서 완전히 작동하며, 거의 리소스를 사용하지 않으므로 존재조차 느끼지 못할 것입니다! GPU가 필요하지 않습니다. 클라우드 및 온프레미스 설치도 가능합니다.\nAI 도구 생태계는 날로 강력해지고 있습니다. AnythingLLM은 이를 쉽게 사용할 수 있게 해줍니다.",
    githubIssue: "Github에 이슈 생성하기",
    user1: "어떻게 시작하나요?!",
    part4:
      '간단합니다. 모든 컬렉션은 "워크스페이스"라고 부르는 버킷으로 구성됩니다. 워크스페이스는 문서, 이미지, PDF 및 기타 파일의 버킷으로, LLM이 이해하고 대화에서 사용할 수 있는 형태로 변환합니다.\n\n언제든지 파일을 추가하고 삭제할 수 있습니다.',
    createWorkspace: "첫 번째 워크스페이스 생성하기",
    user2:
      "이것은 AI 드롭박스와 같은 건가요? 채팅은 어떤가요? 이건 챗봇 아닌가요?",
    part5:
      "AnythingLLM은 더 스마트한 Dropbox 이상의 것입니다.\n\nAnythingLLM은 데이터와 대화할 수 있는 두 가지 방법을 제공합니다:\n\n<i>쿼리:</i> 워크스페이스 내 문서에서 찾아낸 데이터나 추론 결과만 채팅으로 제공합니다. 워크스페이스에 문서를 더 많이 추가할수록 더 똑똑해집니다!\n\n<i>대화:</i> 문서와 실시간 채팅 기록이 동시에 LLM의 지식에 기여합니다. 실시간 텍스트 정보나 LLM의 오해를 바로잡는 데 매우 유용합니다.\n\n채팅 중간에 <i>모드를 전환할 수 있습니다!</i>",
    user3: "와, 이거 정말 놀랍네요, 당장 사용해보고 싶어요!",
    part6: "즐기세요!",
    starOnGithub: "GitHub에 별표 달기",
    contact: "Mintplex Labs에 연락하기",
  },

  // General Appearance
  general: {
    vector: {
      title: "벡터 수",
      description: "벡터 데이터베이스에 있는 총 벡터 수입니다.",
    },
    names: {
      description: "이것은 워크스페이스의 표시 이름만 변경합니다.",
    },
    message: {
      title: "제안된 채팅 메시지",
      description: "워크스페이스 사용자가 사용할 메시지를 수정합니다.",
      add: "새 메시지 추가",
      save: "메시지 저장",
      heading: "저에게 설명해주세요",
      body: "AnythingLLM의 장점",
      headingLabel: "메시지 제목",
      headingPlaceholder: "메시지 제목을 입력하세요",
      bodyLabel: "메시지 내용",
      bodyPlaceholder: "메시지 내용을 입력하세요",
      error: "환영 메시지 업데이트 실패: {{error}}",
      success: "환영 메시지가 성공적으로 업데이트되었습니다.",
      maxLimit: "최대 4개의 메시지만 허용됩니다.",
    },
    pfp: {
      title: "어시스턴트 프로필 이미지",
      description: "이 워크스페이스의 어시스턴트 프로필 이미지를 수정합니다.",
      image: "워크스페이스 이미지",
      remove: "워크스페이스 이미지 제거",
      imageAlt: "사용자 프로필 사진",
      uploadSuccess: "프로필 사진이 업로드되었습니다.",
      uploadFailed: "프로필 사진 업로드 실패: {{error}}",
      removeSuccess: "프로필 사진이 제거되었습니다.",
      removeFailed: "프로필 사진 제거 실패: {{error}}",
    },
    delete: {
      title: "워크스페이스 삭제",
      description:
        "이 워크스페이스와 모든 데이터를 삭제합니다. 이 작업은 모든 사용자에 대해 워크스페이스를 삭제합니다.",
      delete: "워크스페이스 삭제",
      deleting: "워크스페이스 삭제 중...",
      "confirm-start": "이 작업은",
      "confirm-end":
        "워크스페이스 전체를 삭제합니다. 이 작업은 벡터 데이터베이스에 있는 모든 벡터 임베딩을 제거합니다.\n\n원본 소스 파일은 그대로 유지됩니다. 이 작업은 되돌릴 수 없습니다.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "워크스페이스 LLM 제공자",
      description:
        "이 워크스페이스에서 사용할 특정 LLM 제공자와 모델입니다. 기본적으로 시스템 LLM 제공자와 설정을 사용합니다.",
      search: "모든 LLM 제공자 검색",
      noModelSupport: "이 제공자는 아직 멀티 모델 지원이 지원되지 않습니다.",
      systemModelLink: "이 워크스페이스는 시스템에 설정된 모델을 사용합니다.",
    },
    model: {
      title: "워크스페이스 채팅 모델",
      description:
        "이 워크스페이스에서 사용할 특정 채팅 모델입니다. 비어 있으면 시스템 LLM 기본 설정을 사용합니다.",
      wait: "-- 모델 기다리는 중 --",
    },
    mode: {
      title: "채팅 모드",
      chat: {
        title: "채팅",
        "desc-start": "문서 내용을 찾습니다.",
        and: "그리고",
        "desc-end": "LLM의 일반 지식을 같이 사용하여 답변을 제공합니다",
      },
      query: {
        title: "쿼리",
        "desc-start": "문서 컨텍스트를 찾을 ",
        only: "때만",
        "desc-end": "답변을 제공합니다.",
      },
    },
    history: {
      title: "채팅 기록",
      "desc-start": "응답의 단기 메모리에 포함될 이전 채팅의 수입니다.",
      recommend: "추천 20개 ",
      "desc-end":
        " 45개 이상은 메시지 크기에 따라 채팅 실패가 발생할 수 있습니다.",
    },
    prompt: {
      title: "프롬프트",
      description:
        "이 워크스페이스에서 사용할 프롬프트입니다. AI가 응답을 생성하기 위해 문맥과 지침을 정의합니다. AI가 질문에 대하여 정확한 응답을 생성할 수 있도록 신중하게 프롬프트를 제공해야 합니다.",
      placeholder:
        "다음 대화, 관련 컨텍스트 및 후속 질문을 고려하여 사용자가 현재 묻고 있는 질문에 답변하세요.",
      default:
        "다음 대화, 관련 컨텍스트 및 후속 질문을 고려하여 사용자가 묻는 현재 질문에 대한 답변을 제공하세요. 위의 정보를 사용하여 사용자의 지침에 따라 질문에 대한 응답만 반환하세요.",
    },
    refusal: {
      title: "쿼리 모드 거부 응답 메시지",
      "desc-start": "쿼리 모드에서",
      query: "응답에 사용할 수 있는",
      "desc-end": "컨텍스트를 찾을 수 없을 때 거부 응답 내용을 작성합니다.",
      placeholder:
        "쿼리 모드에서 적절한 컨텍스트를 찾을 수 없을 때 반환되는 텍스트입니다.",
      default: "이 워크스페이스에는 질문에 대한 관련 정보가 없습니다.",
    },
    temperature: {
      title: "LLM 온도",
      "desc-start": '이 설정은 LLM 응답이 얼마나 "창의적"일지를 제어합니다.',
      "desc-end":
        "숫자가 높을수록 창의적입니다. 일부 모델에서는 너무 높게 설정하면 일관성 없는 응답이 나올 수 있습니다.",
      hint: "대부분의 LLM은 유효한 값의 다양한 허용 범위를 가지고 있습니다. 해당 정보는 LLM 제공자에게 문의하세요.",
    },
    query: {
      noInformation:
        "그 질문에 답변할 충분한 정보가 없습니다. 다른 질문을 시도해 보세요.",
      sourceContinued: "...원본 문서에서 계속됨...",
      vectorDbFailure: "벡터 데이터베이스 제공자에 연결할 수 없습니다.",
      refusalResponse: "이 워크스페이스에는 질문에 대한 관련 정보가 없습니다.",
    },
    streaming: {
      disabled: "[스트리밍 비활성화됨] 스트리밍이 사용할 수 없습니다.",
    },
    error: {
      noCompletion: "이 입력으로 완료할 수 있는 텍스트 응답이 없습니다.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "벡터 데이터베이스 식별자",
    snippets: {
      title: "최대 문맥 조각",
      description:
        "이 설정은 채팅 또는 쿼리당 LLM에 전송될 최대 문맥 조각 수를 제어합니다.",
      recommend: "추천: 4",
    },
    doc: {
      title: "문서 유사성 임계값",
      description:
        "채팅과 관련이 있다고 판단되는 문서의 유사성 점수입니다. 숫자가 높을수록 질문에 대한 문서의 내용이 유사합니다.",
      zero: "제한 없음",
      low: "낮음 (유사성 점수 ≥ .25)",
      medium: "중간 (유사성 점수 ≥ .50)",
      high: "높음 (유사성 점수 ≥ .75)",
    },
    reset: {
      reset: "벡터 데이터베이스 재설정",
      resetting: "벡터 지우는 중...",
      confirm:
        "이 워크스페이스의 벡터 데이터베이스를 재설정하려고 합니다. 현재 임베딩된 모든 벡터 임베딩을 제거합니다.\n\n원본 소스 파일은 그대로 유지됩니다. 이 작업은 되돌릴 수 없습니다.",
      error: "워크스페이스 벡터 데이터베이스를 재설정할 수 없습니다!",
      success: "워크스페이스 벡터 데이터베이스가 재설정되었습니다!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "도구 호출을 명시적으로 지원하지 않는 LLM의 성능은 모델의 기능과 정확도에 크게 좌우됩니다. 일부 기능은 제한되거나 작동하지 않을 수 있습니다.",
    provider: {
      title: "워크스페이스 에이전트 LLM 제공자",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 특정 LLM 제공자 및 모델입니다.",
    },
    mode: {
      chat: {
        title: "워크스페이스 에이전트 채팅 모델",
        description:
          "이 워크스페이스의 @agent 에이전트에 사용할 특정 채팅 모델입니다.",
      },
      title: "워크스페이스 에이전트 모델",
      description:
        "이 워크스페이스의 @agent 에이전트에 사용할 특정 LLM 모델입니다.",
      wait: "-- 모델 기다리는 중 --",
    },

    skill: {
      title: "기본 에이전트 스킬",
      description:
        "기본 에이전트의 능력을 사전 정의된 스킬을 사용하여 향상시킵니다. 이 설정은 모든 워크스페이스에 적용됩니다.",
      rag: {
        title: "RAG와 장기 메모리",
        description:
          '에이전트가 제공된 문서를 활용하여 쿼리에 답변하거나 에이전트에게 "기억"할 내용을 요청하여 장기 메모리 검색을 허용합니다.',
      },
      view: {
        title: "문서 보기 및 요약",
        description:
          "에이전트가 현재 임베딩된 워크스페이스의 문서 내용을 나열하고 요약할 수 있도록 합니다.",
      },
      scrape: {
        title: "웹사이트 스크래핑",
        description:
          "에이전트가 웹사이트를 방문하고 내용을 스크래핑할 수 있도록 합니다.",
      },
      generate: {
        title: "차트 생성",
        description:
          "기본 에이전트가 채팅에서 제공된 데이터를 이용하여 다양한 유형의 차트를 생성할 수 있도록 합니다.",
      },
      save: {
        title: "브라우저에서 파일 생성과 저장",
        description:
          "기본 에이전트가 브라우저에서 파일을 생성하고 다운로드할 수 있도록 합니다.",
      },
      web: {
        title: "실시간 웹 검색 및 탐색",
        "desc-start":
          "에이전트가 웹을 검색하여 질문에 답변할 수 있도록 허용합니다.",
        "desc-end":
          "에이전트 세션 중 웹 검색은 설정되지 않으면 작동하지 않습니다.",
      },
    },
    performanceWarning: "이 모델은 성능 제한이 있을 수 있습니다.",
    searchPlaceholder: "사용 가능한 LLM 제공자 검색",
    logoAlt: "로고",
  },

  //workspace

  workspace: {
    welcome: "새 작업 공간에 오신 것을 환영합니다.",
    uploadPrompt: "시작하려면",
    uploadDocument: "문서를 업로드",
    orSendMessage: "하거나 채팅을 보내십시오.",
    sendMessagePrompt: "시작하려면 채팅을 보내십시오.",
    create: {
      title: "첫 번째 워크스페이스 생성",
      description: "첫 번째 워크스페이스를 만들고 AnythingLLM을 시작하세요.",
      imageAlt: "워크스페이스 생성",
      placeholder: "내 워크스페이스",
      successMessage:
        "워크스페이스가 성공적으로 생성되었습니다! 홈으로 이동 중...",
      errorMessage: "워크스페이스 생성 실패: {{error}}",
    },
    vectorDatabase: {
      updateButton: "워크스페이스 업데이트",
      updating: "업데이트 중...",
      updateSuccess: "워크스페이스가 업데이트되었습니다!",
      error: "오류",
    },
  },

  //prompt
  promptInput: {
    placeholder: "메시지 보내기",
    sendTooltip: "워크스페이스에 프롬프트 메시지 보내기",
    sendMessage: "메시지 보내기",
  },

  //thread
  threadContainer: {
    loadingThreads: "스레드를 불러오는 중...",
    defaultThread: "기본",
    newThread: "새 스레드",
    startingThread: "스레드 시작 중...",
    createThreadError: "스레드를 생성할 수 없습니다 - {{error}}",
    deleteSelected: "선택 삭제",
  },

  //PromptInput
  slashCommands: {
    tooltip: "채팅을 위한 모든 슬래시 명령어 보기",
    altText: "슬래시 명령어 버튼",
  },

  availableAgents: {
    tooltip: "채팅에 사용할 수 있는 모든 에이전트 보기",
    defaultAgent: "이 워크스페이스의 기본 에이전트입니다.",
    customAgentsComingSoon: "맞춤 에이전트가 곧 제공됩니다!",
    firstTime: {
      title: "에이전트를 발견하셨습니다!",
      description:
        "에이전트는 문서와의 채팅을 넘어서는 특별한 기능을 가진 LLM입니다. 이제 에이전트를 사용하여 실시간 웹 검색 및 스크래핑, 문서 브라우저 저장, 문서 요약 등을 할 수 있습니다.",
      earlyAccess:
        "이 기능은 현재 얼리 액세스 중이며, 맞춤 통합 및 코드 실행을 포함한 맞춤 에이전트는 이후 업데이트에서 제공될 예정입니다.",
      continue: "계속",
    },
  },

  textSize: {
    tooltip: "텍스트 크기 변경",
    small: "작게",
    normal: "보통",
    large: "크게",
  },

  speechToText: {
    tooltip: "프롬프트를 말하세요",
    microphoneUnavailable:
      "AnythingLLM이 마이크에 액세스할 수 없습니다. 이 기능을 사용하려면 이 사이트에 마이크 권한을 부여하십시오.",
  },

  //system-preferences
  adminSystem: {
    title: "시스템 설정",
    description: "이것은 인스턴스의 전체 설정 및 구성입니다.",
    saving: "저장 중...",
    saveChanges: "변경 사항 저장",
    toastSuccess: "시스템 설정이 성공적으로 업데이트되었습니다.",
    limitTitle: "사용자당 하루 메시지 제한",
    limitDescription:
      "관리자가 아닌 사용자가 24시간 이내에 성공적인 쿼리 또는 채팅의 수를 제한합니다. 사용자가 OpenAI 비용을 증가시키는 것을 방지하기 위해 이 기능을 활성화하세요.",
    messageLimit: "하루 메시지 제한",
  },

  //Users
  adminUsers: {
    title: "사용자 관리",
    description:
      "이 인스턴스에 계정이 있는 모든 계정입니다. 계정을 제거하면 이 인스턴스에 대한 접근 권한이 즉시 제거됩니다.",
    addUser: "사용자 추가",
    username: "사용자 이름",
    role: "역할",
    dateAdded: "등록일",
    edit: "편집",
    suspend: "정지",
    unsuspend: "정지 해제",
    delete: "삭제",
    suspendConfirm:
      "{{username}} 사용자를 정지하시겠습니까?\n이 작업 후에는 이 인스턴스에 로그인할 수 없으며 관리자에 의해 정지가 해제되기 전까지 접속이 제한됩니다.",
    unsuspendSuccess: "사용자가 더 이상 정지 상태가 아닙니다.",
    suspendSuccess: "사용자가 정지되었습니다.",
    deleteConfirm:
      "{{username}} 사용자를 삭제하시겠습니까?\n이 작업 후에는 사용자가 더 이상 이 인스턴스를 사용할 수 없으며 이 작업은 되돌릴 수 없습니다.",
    deleteSuccess: "사용자가 시스템에서 삭제되었습니다.",
    permissionsTitle: "권한",
    roleHint: {
      default: [
        "관리자나 매니저에 의해 추가된 워크스페이스에서만 채팅을 보낼 수 있습니다.",
        "어떠한 설정도 수정할 수 없습니다.",
      ],
      manager: [
        "워크스페이스를 보고, 생성하고, 삭제하며 워크스페이스 관련 설정을 수정할 수 있습니다.",
        "인스턴스에 새로운 사용자를 생성, 수정 및 초대할 수 있습니다.",
        "LLM, 벡터 DB, 임베딩 또는 기타 연결을 수정할 수 없습니다.",
      ],
      admin: [
        "최고 수준의 사용자 권한입니다.",
        "시스템 전반에 걸쳐 모든 것을 볼 수 있으며 모든 작업을 수행할 수 있습니다.",
      ],
    },
    newUserModal: {
      title: "사용자 추가",
      username: "사용자 이름",
      usernamePlaceholder: "사용자의 이름",
      password: "비밀번호",
      passwordPlaceholder: "사용자의 초기 비밀번호",
      role: "역할",
      roleDefault: "기본",
      roleManager: "매니저",
      roleAdmin: "관리자",
      error: "오류",
      afterCreateInfo:
        "사용자를 생성한 후, 사용자는 초기 로그인 정보를 통해 접근해야 합니다.",
      cancel: "취소",
      addUser: "사용자 추가",
    },
    editUserModal: {
      title: "사용자 편집",
      username: "사용자 이름",
      usernamePlaceholder: "사용자의 이름",
      newPassword: "새 비밀번호",
      passwordPlaceholder: "{{username}}의 새 비밀번호",
      role: "역할",
      roleDefault: "기본",
      roleManager: "매니저",
      roleAdmin: "관리자",
      error: "오류",
      cancel: "취소",
      updateUser: "사용자 업데이트",
    },
  },

  //Workspaces
  adminWorkspaces: {
    title: "인스턴스 작업공간",
    description:
      "이 인스턴스에 존재하는 모든 작업공간입니다. 작업공간을 제거하면 관련된 모든 채팅 및 설정이 삭제됩니다.",
    newWorkspace: "새 작업공간",
    name: "이름",
    link: "링크",
    users: "사용자",
    createdOn: "생성일",
    newWorkspaceTitle: "새 작업공간 생성",
    workspaceNamePlaceholder: "작업공간 이름 입력",
    creationInfo:
      "이 작업공간을 생성한 후에는 관리자만 볼 수 있습니다. 생성 후 사용자를 추가할 수 있습니다.",
    error: "오류",
    cancel: "취소",
    createWorkspace: "작업공간 생성",
    confirmDelete:
      "{{name}} 작업공간을 삭제하시겠습니까?\n이 작업을 수행하면 이 인스턴스에서 사용 불가능해집니다.\n\n이 작업은 되돌릴 수 없습니다.",
  },

  // Workspace Chats
  recorded: {
    title: "워크스페이스 채팅",
    description:
      "이것들은 사용자들이 보낸 모든 채팅과 메시지입니다. 생성 날짜별로 정렬되어 있습니다.",
    export: "내보내기",
    exportSuccess: "{{name}} 형식으로 채팅이 성공적으로 내보내졌습니다.",
    exportError: "채팅 내보내기에 실패했습니다.",
    clearChats: "채팅 삭제",
    confirmClear:
      "모든 채팅을 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다.",
    clearSuccess: "모든 채팅이 삭제되었습니다.",
    table: {
      id: "ID",
      by: "보낸 사람",
      workspace: "워크스페이스",
      prompt: "프롬프트",
      response: "응답",
      at: "보낸 시각",
    },
    previous: "이전 페이지",
    next: "다음 페이지",
  },

  //Invite
  adminInvites: {
    title: "초대 관리",
    description:
      "조직 내 사람들이 초대 링크를 수락하고 가입할 수 있도록 초대 링크를 생성하세요. 초대 링크는 한 명의 사용자만 사용할 수 있습니다.",
    createInviteLink: "초대 링크 생성",
    status: "상태",
    acceptedBy: "수락한 사용자",
    createdBy: "생성자",
    created: "생성일",
    confirmDelete:
      "이 초대를 비활성화하시겠습니까?\n비활성화 후에는 더 이상 사용할 수 없습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    disabled: "비활성화됨",
    deletedUser: "삭제된 사용자",
    copied: "복사됨",
    copyInviteLink: "초대 링크 복사",
    newInviteModal: {
      title: "새 초대 생성",
      error: "오류",
      afterCreation:
        "생성 후 초대를 복사하여 새 사용자에게 전송할 수 있으며, 해당 사용자는 기본 역할로 계정을 생성하고 선택한 워크스페이스에 자동으로 추가됩니다.",
      autoAddWorkspace: "초대 받은 사람을 워크스페이스에 자동 추가",
      workspaceInfo:
        "아래의 워크스페이스를 선택하여 사용자를 자동으로 할당할 수 있습니다. 기본적으로 사용자는 표시되는 워크스페이스가 없습니다. 초대 수락 후 워크스페이스를 나중에 할당할 수 있습니다.",
      cancel: "취소",
      createInvite: "초대 생성",
      copiedLink: "링크 복사됨",
      copyInviteLink: "초대 링크 복사",
    },
  },

  //LLM Preference
  llmPreference: {
    title: "LLM 기본 설정",
    description:
      "AnythingLLM은 다양한 LLM 제공자와 함께 작동할 수 있습니다. 이것은 채팅을 처리하는 서비스가 될 것입니다.",
    search: "LLM 제공자 검색",
    toastError: "LLM 설정 저장에 실패했습니다: {{error}}",
    openai: {
      apiKey: "API 키",
      apiKeyPlaceholder: "OpenAI API 키",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로딩 중 --",
    },
    gemini: {
      apiKeyPlaceholder: "Google Gemini API 키",
      modelLabel: "모델 선택",
      safetyLabel: "안전 설정",
      safetyNone: "없음",
      safetyFew: "적게 차단",
      safetySome: "중간 차단 (기본값)",
      safetyMost: "많이 차단",
    },
    huggingface: {
      endpointLabel: "HuggingFace 추론 엔드포인트",
      accessTokenLabel: "HuggingFace 액세스 토큰",
      accessTokenPlaceholder: "HuggingFace 액세스 토큰",
      tokenLimitLabel: "모델 토큰 제한",
    },
    ollama: {
      maxTokens: "최대 토큰 수",
      maxTokensDescription: "문맥과 응답을 위한 최대 토큰 수입니다.",
      showManualEndpoint: "수동 엔드포인트 입력 표시",
      hideManualEndpoint: "수동 엔드포인트 입력 숨기기",
      baseUrl: "Ollama 기본 URL",
      baseUrlDescription: "Ollama가 실행되고 있는 URL을 입력하세요.",
      autoDetect: "자동 감지",
      modelSelection: "Ollama 모델",
      loadingModels: "--사용 가능한 모델 로딩 중--",
      enterBaseUrl: "Ollama URL을 먼저 입력하세요",
      modelSelectionDescription:
        "사용할 Ollama 모델을 선택하세요. 유효한 Ollama URL을 입력하면 모델이 로드됩니다.",
      loadedModels: "로드된 모델",
      chooseModel: "대화를 위해 사용할 Ollama 모델을 선택하세요.",
      modelLoadError: "사용자 모델을 가져오는 데 실패했습니다:",
    },
    lmstudio: {
      alertMessage: "LMStudio를 사용하려면 임베딩 서비스를 설정해야 합니다.",
      manageEmbedding: "임베딩 관리",
      maxTokens: "최대 토큰 수",
      maxTokensDescription: "컨텍스트 및 응답에 사용할 최대 토큰 수입니다.",
      hideAdvancedControls: "수동 엔드포인트 입력 숨기기",
      showAdvancedControls: "수동 엔드포인트 입력 표시",
      baseUrlLabel: "LM 스튜디오 기본 URL",
      autoDetect: "자동 감지",
      enterUrl: "LM 스튜디오가 실행 중인 URL을 입력하세요.",
      modelLabel: "LM 스튜디오 모델",
      loadingModels: "--사용 가능한 모델 로딩 중--",
      enterUrlFirst: "먼저 LM 스튜디오 URL을 입력하세요.",
      modelDescription: "대화를 위해 사용할 LM 스튜디오 모델을 선택하세요.",
      availableModels: "로드된 모델",
      fetchError: "사용자 정의 모델을 가져오는 데 실패했습니다:",
    },
    localai: {
      alertMessage:
        "LocalAI를 LLM으로 사용하려면 임베딩 서비스를 설정해야 합니다.",
      manageEmbedding: "임베딩 관리",
      baseURL: "Local AI 기본 URL",
      tokenLimit: "토큰 컨텍스트 창",
      apiKey: "Local AI API 키",
      optional: "선택 사항",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingForURL: "-- URL을 기다리는 중 --",
      loadedModels: "로드된 모델",
    },
    togetherAi: {
      apiKey: "Together AI API 키",
      apiKeyPlaceholder: "Together AI API 키",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
    },
    mistral: {
      apiKeyLabel: "Mistral API 키",
      apiKeyPlaceholder: "Mistral API 키",
      modelLabel: "모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingApiKey: "-- API 키를 기다리는 중 --",
      availableModels: "사용 가능한 Mistral 모델",
    },
    perplexity: {
      apiKey: "Perplexity API 키",
      apiKeyPlaceholder: "Perplexity API 키",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      availableModels: "사용 가능한 Perplexity 모델",
    },
    openrouter: {
      apiKey: "OpenRouter API 키",
      apiKeyPlaceholder: "OpenRouter API 키",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
    },
    native: {
      warning: "로컬에서 호스팅된 LLM은 실험적입니다. 주의해서 사용하세요.",
      modelSelection: "모델 선택",
      waitingModels: "-- 모델을 기다리는 중 --",
      loadedModels: "로드된 모델",
      tokenLimit: "토큰 컨텍스트 창",
    },
    litellm: {
      baseURL: "기본 URL",
      tokenLimit: "토큰 컨텍스트 창",
      apiKey: "API 키",
      optional: "선택 사항",
      modelSelection: "채팅 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingForURL: "-- URL을 기다리는 중 --",
      loadedModels: "로드된 모델",
    },
    textgenwebui: {
      baseUrl: "기본 URL",
      tokenWindow: "토큰 컨텍스트 창",
      tokenWindowPlaceholder: "컨텍스트 창 제한 (예: 4096)",
      apiKeyOptional: "API 키 (선택 사항)",
      apiKeyPlaceholder: "TextGen Web UI API 키",
    },
    llms: {
      openai: "대부분의 비상업적 사용에 적합한 표준 옵션입니다.",
      azure: "Azure 서비스에서 호스팅되는 OpenAI의 엔터프라이즈 옵션입니다.",
      anthropic: "Anthropic에서 호스팅하는 친절한 AI 비서입니다.",
      gemini: "Google의 가장 크고 강력한 AI 모델입니다.",
      huggingface:
        "150,000개 이상의 오픈소스 LLM과 세계적인 AI 커뮤니티에 액세스하세요.",
      ollama: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      lmstudio:
        "수천 개의 최신 LLM을 몇 번의 클릭만으로 발견, 다운로드 및 실행하세요.",
      localai: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      koboldcpp: "koboldcpp를 사용하여 로컬 LLM을 실행합니다.",
      textgenwebui:
        "Oobabooga의 텍스트 생성 웹 UI를 사용하여 로컬 LLM을 실행합니다.",
      togetherai: "Together AI의 오픈 소스 모델을 실행합니다.",
      mistral: "Mistral AI의 오픈 소스 모델을 실행합니다.",
      perplexity:
        "Perplexity AI에서 호스팅하는 강력하고 인터넷에 연결된 모델을 실행합니다.",
      openrouter: "LLM을 위한 통합 인터페이스입니다.",
      groq: "실시간 AI 애플리케이션을 위한 가장 빠른 LLM 추론입니다.",
      cohere: "Cohere의 강력한 Command 모델을 실행합니다.",
      litellm: "LiteLLM의 다양한 LLM을 위한 OpenAI 호환 프록시를 실행합니다.",
      "generic-openai":
        "사용자 정의 구성을 통해 모든 OpenAI 호환 서비스에 연결합니다.",
      native:
        "이 AnythingLLM 인스턴스에서 채팅을 위한 다운로드된 맞춤형 Llama 모델을 사용합니다.",
    },
    providers: {
      defaultName: "시스템 기본값",
      defaultDescription:
        "{{name}}을(를) 이 워크스페이스의 LLM으로 사용하려면 먼저 설정이 필요합니다.",
    },
    saveError: "{{name}} 설정 저장 실패: {{error}}",
  },

  // Appearance
  appearance: {
    title: "외관",
    description: "플랫폼의 외관 설정을 수정합니다.",
    logo: {
      title: "사용자 로고",
      description:
        "사용자의 로고를 업로드하여 챗봇을 자신의 것으로 만드십시오.",
      add: "사용자 로고 추가",
      recommended: "추천 크기: 800 x 200",
      remove: "제거",
      replace: "교체",
    },
    message: {
      title: "사용자 메시지",
      description: "사용자에게 표시되는 자동 메시지를 작성합니다.",
      new: "새로운",
      system: "시스템",
      user: "사용자",
      message: "메시지",
      assistant: "AnythingLLM 채팅 어시스턴트",
      "double-click": "더블 클릭하여 편집...",
      save: "메시지 저장",
    },
    icons: {
      title: "맞춤형 바닥글 아이콘",
      description: "사이드바 하단에 표시되는 아이콘을 수정합니다.",
      icon: "아이콘",
      link: "링크",
    },
  },

  // API Keys
  api: {
    title: "API 키",
    description:
      "API 키는 소유자가 프로그래밍 방식으로 이 AnythingLLM 인스턴스에 액세스하고 관리할 수 있도록 합니다.",
    link: "API 문서 읽기",
    generate: "새 API 키 생성",
    table: {
      key: "API 키",
      by: "생성한 사람",
      created: "생성일",
    },
  },

  llm: {
    title: "LLM 기본 설정",
    description:
      "선호하는 LLM 채팅과 임베딩 제공자에 대한 인증 키 설정입니다. 이 키가 현재 활성 상태이고 정확해야 AnythingLLM이 제대로 작동합니다.",
    provider: "LLM 제공자",
    searchPlaceholder: "사용 가능한 LLM 제공자 검색",
    noneSelected: "선택되지 않음",
    selectLLM: "LLM을 선택해야 합니다",
    saving: "저장 중...",
    saveChanges: "변경 사항 저장",
    saveSuccess: "LLM 선호도가 성공적으로 저장되었습니다.",
    saveError: "LLM 설정을 저장하지 못했습니다: {{error}}",
    providers: {
      defaultName: "시스템 기본값",
      defaultDescription:
        "이 워크스페이스에 시스템 기본 설정 LLM을 사용합니다.",
      apiKeyLabel: "{{provider}} API 키",
      apiKeyPlaceholder: "{{provider}} API 키",
      modelLabel: "채팅 모델 선택",
      openai: "가장 인기있는 LLM 표준 옵션입니다.",
      azure: "Azure 서비스에서 호스팅되는 OpenAI의 엔터프라이즈 옵션입니다.",
      anthropic: "Anthropic에서 호스팅하는 친숙한 AI 어시스턴트입니다.",
      gemini: "Google의 가장 크고 능력 있는 AI 모델입니다.",
      huggingface:
        "150,000개 이상의 오픈 소스 LLM과 전세계 AI 커뮤니티에 접근하십시오.",
      ollama: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      lmstudio:
        "몇 번의 클릭만으로 수천 개의 최첨단 LLM을 발견, 다운로드하고 실행합니다.",
      localai: "자신의 머신에서 LLM을 로컬로 실행합니다.",
      togetherai: "Together AI의 오픈 소스 모델을 실행합니다.",
      mistral: "Mistral AI의 오픈 소스 모델을 실행합니다.",
      perplexity:
        "Perplexity AI에서 호스팅하는 강력하고 인터넷에 연결된 모델을 실행합니다.",
      openrouter: "LLM을 위한 통합 인터페이스입니다.",
      groq: "실시간 AI 응용 프로그램을 위한 가장 빠른 LLM 추론을 제공합니다.",
      koboldcpp: "koboldcpp를 사용하여 로컬 LLM을 실행합니다.",
      textgenwebui:
        "Oobabooga의 텍스트 생성 웹 UI를 사용하여 로컬 LLM을 실행합니다.",
      cohere: "Cohere의 강력한 Command 모델을 실행합니다.",
      litellm: "여러 LLM을 위한 LiteLLM의 OpenAI 호환 프록시를 실행합니다.",
      genericopenai: "맞춤 구성을 통해 OpenAi 호환 서비스를 연결합니다.",
      native:
        "TeamplGPT 인스턴스에서 채팅하기 위해 다운로드한 맞춤형 Llama 모델을 사용합니다.",
      safetyLabel: "안전 설정",
      safety: {
        none: "없음",
        blockFew: "조금 차단",
        blockSome: "일부 차단 (기본값)",
        blockMost: "대부분 차단",
      },
      baseUrl: "기본 URL",
      tokenContextWindow: "토큰 컨텍스트 창",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingForUrl: "-- URL 대기 중 --",
      waitingForAPI: "-- API 대기 중 --",
      apiKey: "API 키",
      loadedModels: "로드된 모델",
    },
  },

  azure: {
    serviceEndpoint: "Azure 서비스 엔드포인트",
    apiKeyLabel: "Azure API 키",
    chatDeploymentName: "채팅 배포 이름",
    chatDeploymentNamePlaceholder: "Azure OpenAI 채팅 모델 배포 이름",
    chatModelTokenLimit: "채팅 모델 토큰 제한",
    embeddingDeploymentName: "임베딩 배포 이름",
    embeddingDeploymentNamePlaceholder: "Azure OpenAI 임베딩 모델 배포 이름",
  },

  huggingface: {
    inferenceEndpoint: "HuggingFace 추론 엔드포인트",
    accessToken: "HuggingFace 액세스 토큰",
    accessTokenPlaceholder: "HuggingFace 액세스 토큰",
    tokenLimit: "모델 토큰 제한",
  },

  genericOpenAi: {
    baseUrl: "기본 URL",
    chatModelName: "채팅 모델 이름",
    chatModelNamePlaceholder: "채팅 요청에 사용되는 모델 ID",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    tokenContextWindowPlaceholder: "컨텍스트 윈도우 제한 (예: 4096)",
    maxTokens: "최대 토큰 수",
    maxTokensPlaceholder: "요청당 최대 토큰 수 (예: 1024)",
  },

  ollama: {
    maxTokens: "최대 토큰 수",
    maxTokensDescription: "컨텍스트 및 응답의 최대 토큰 수.",
    hideManualInput: "수동 엔드포인트 입력 숨기기",
    showManualInput: "수동 엔드포인트 입력 표시",
    baseUrl: "Ollama 기본 URL",
    baseUrlDescription: "Ollama가 실행 중인 URL을 입력하세요.",
    autoDetect: "자동 감지",
    enterUrlFirst: "먼저 Ollama URL을 입력하세요",
    model: "Ollama 모델",
    modelDescription:
      "사용하려는 Ollama 모델을 선택하세요. 유효한 Ollama URL을 입력한 후 모델이 로드됩니다.",
    maxChunkLength: "최대 임베딩 청크 길이",
    maxChunkLengthDescription: "임베딩을 위한 텍스트 청크의 최대 길이.",
  },

  lmstudio: {
    alertMessage:
      "LMStudio를 LLM으로 사용하려면 임베딩 서비스를 설정해야 합니다.",
    manageEmbedding: "임베딩 관리 →",
    maxTokens: "최대 토큰 수",
    maxTokensDescription: "컨텍스트 및 응답의 최대 토큰 수.",
    hideManualInput: "수동 엔드포인트 입력 숨기기",
    showManualInput: "수동 엔드포인트 입력 표시",
    baseUrl: "LM Studio 기본 URL",
    baseUrlDescription: "LM Studio가 실행 중인 URL을 입력하세요.",
    autoDetect: "자동 감지",
    enterUrlFirst: "먼저 LM Studio URL을 입력하세요",
    model: "LM Studio 모델",
    modelDescription:
      "사용하려는 LM Studio 모델을 선택하세요. 유효한 LM Studio URL을 입력한 후 모델이 로드됩니다.",
    maxChunkLength: "최대 임베딩 청크 길이",
    maxChunkLengthDescription: "임베딩을 위한 텍스트 청크의 최대 길이.",
  },

  localai: {
    alertMessage:
      "LocalAI를 LLM으로 사용하려면 임베딩 서비스를 설정해야 합니다.",
    manageEmbedding: "임베딩 관리 →",
    baseUrl: "Local AI 기본 URL",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    apiKey: "Local AI API 키",
    modelSelection: "채팅 모델 선택",
    optional: "선택 사항",
  },

  textgenwebui: {
    baseUrl: "기본 URL",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
    tokenContextWindowPlaceholder: "컨텍스트 윈도우 제한 (예: 4096)",
    apiKeyOptional: "API 키 (선택 사항)",
  },

  nativellm: {
    experimentalWarning:
      "로컬에서 호스팅되는 LLM 사용은 실험적입니다. 주의해서 사용하세요.",
    modelSelection: "모델 선택",
    waitingForModels: "-- 모델을 기다리는 중 --",
    tokenContextWindow: "토큰 컨텍스트 윈도우",
  },

  genericOpenAiOptions: {
    baseUrlLabel: "기본 URL",
    baseUrlPlaceholder: "예: https://proxy.openai.com",
    apiKeyLabel: "API 키",
    apiKeyPlaceholder: "서비스 API 키",
    modelNameLabel: "챗 모델 이름",
    modelNamePlaceholder: "챗 요청에 사용될 모델 ID",
    tokenContextWindowLabel: "토큰 컨텍스트 윈도우",
    tokenContextWindowPlaceholder: "컨텍스트 윈도우 제한 (예: 4096)",
    maxTokensLabel: "최대 토큰 수",
    maxTokensPlaceholder: "요청당 최대 토큰 수 (예: 1024)",
  },

  transcription: {
    title: "텍스트 변환 모델 기본 설정",
    description:
      "선호하는 텍스트 변환 모델 제공자의 인증입니다. 이 키가 현재 활성 상태이고 정확해야 미디어 파일 및 오디오가 텍스트 변환됩니다.",
    provider: "텍스트 변환 제공자",
    "warn-start":
      "RAM 또는 CPU 성능이 제한된 머신에서 로컬 위스퍼 모델을 사용하면 미디어 파일을 처리할 때 AnythingLLM이 중단될 수 있습니다.",
    "warn-recommend": "최소 2GB RAM과 10Mb 보다 작은 파일 업로드를 권장합니다.",
    "warn-end": "내장된 모델은 첫 번째 사용 시 자동으로 다운로드됩니다.",
    searchPlaceholder: "텍스트 변환 제공자를 검색하십시오",
    error: "환경 설정 저장 실패: {{error}}",
    success: "텍스트 변환 기본 설정이 성공적으로 저장되었습니다.",
    saving: "저장 중...",
    saveChanges: "변경 사항 저장",
    providers: {
      openai: "API 키를 사용하여 OpenAI Whisper-large 모델을 활용합니다.",
      local: "이 인스턴스에서 로컬로 위스퍼 모델을 실행합니다.",
    },
  },

  whisper: {
    openai: {
      apiKey: "API 키",
      apiKeyPlaceholder: "OpenAI API 키",
      model: "Whisper 모델",
      defaultModel: "Whisper Large",
    },
  },

  embedding: {
    title: "임베딩 기본 설정",
    "desc-start":
      "임베딩 엔진을 지원하지 않는 LLM을 사용할 때 다른 임베딩 엔진 제공자의 인증이 필요할 수 있습니다.",
    "desc-end":
      "임베딩은 텍스트를 벡터로 변환하는 과정입니다. 이 인증은 파일과 프롬프트를 AnythingLLM이 처리할 수 있는 형식으로 변환하기 위해 필요합니다.",
    provider: {
      title: "임베딩 제공자",
      description:
        "AnythingLLM의 기본 임베딩 엔진을 사용할 때는 설정이 필요하지 않습니다.",
    },
    error: "임베딩 설정을 저장하지 못했습니다: {{error}}",
    success: "임베딩 기본 설정이 성공적으로 저장되었습니다.",
    searchPlaceholder: "모든 임베딩 제공자를 검색하십시오",
    modalWarning:
      "임베딩 모델을 변경하면 채팅에서 이전에 임베딩된 문서가 작동하지 않게 됩니다. 모든 작업 공간에서 문서를 임베딩 해제하고 완전히 제거한 후 새 임베딩 모델로 다시 업로드해야 합니다.",
    providers: {
      native:
        "AnythingLLM을 위한 기본 임베딩 제공자를 사용합니다. 설정이 필요하지 않습니다.",
      openai: "비상업적 사용에 적합한 표준 옵션입니다.",
      azure: "Azure 서비스에서 호스팅되는 OpenAI의 엔터프라이즈 옵션입니다.",
      localai: "자신의 머신에서 임베딩 모델을 로컬로 실행합니다.",
      ollama: "자신의 머신에서 임베딩 모델을 로컬로 실행합니다.",
      lmstudio:
        "수천 개의 최신 LLM을 몇 번의 클릭만으로 발견, 다운로드, 실행하십시오.",
      cohere: "Cohere에서 강력한 임베딩 모델을 실행합니다.",
      voyageai: "Voyage AI에서 강력한 임베딩 모델을 실행합니다.",
      litellm: "LiteLLM에서 강력한 임베딩 모델을 실행합니다.",
      "generic-openai":
        "모든 OpenAI 호환 API 서비스에서 임베딩 모델을 실행합니다.",
    },
    openai: {
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "OpenAI API 키",
      modelPreferenceLabel: "모델 선호도",
      availableModels: "사용 가능한 임베딩 모델",
    },
    localai: {
      baseUrlLabel: "LocalAI 기본 URL",
      baseUrlPlaceholder: "http://localhost:8080/v1",
      maxChunkLengthLabel: "최대 임베딩 청크 길이",
      maxChunkLengthPlaceholder: "1000",
      apiKeyLabel: "Local AI API 키",
      apiKeyPlaceholder: "sk-mysecretkey",
      optionalLabel: "선택 사항",
      modelNameLabel: "임베딩 모델 이름",
      loadingModels: "-- 사용 가능한 모델을 불러오는 중 --",
      waitingForUrl: "-- URL을 기다리는 중 --",
      loadedModelsLabel: "로드된 모델",
    },
    ollama: {
      maxChunkLengthLabel: "최대 임베딩 청크 길이",
      maxChunkLengthDescription: "임베딩을 위한 텍스트 청크의 최대 길이입니다.",
      hideManualEndpointInput: "수동 엔드포인트 입력 숨기기",
      showManualEndpointInput: "수동 엔드포인트 입력 표시",
      baseUrlLabel: "Ollama 기본 URL",
      baseUrlDescription: "Ollama가 실행 중인 URL을 입력하세요.",
      autoDetect: "자동 감지",
      modelLabel: "Ollama 임베딩 모델",
      loadingModels: "-- 사용 가능한 모델을 불러오는 중 --",
      enterUrlFirst: "먼저 Ollama URL을 입력하세요",
      modelDescription: "임베딩을 위한 Ollama 모델을 선택하세요.",
      loadedModelsLabel: "로드된 모델",
    },
    lmstudioOptions: {
      maxChunkLengthLabel: "최대 임베딩 청크 길이",
      maxChunkLengthHelper: "임베딩할 텍스트 청크의 최대 길이.",
      hide: "숨기기",
      show: "보이기",
      manualEndpointInput: "수동 엔드포인트 입력",
      baseUrlLabel: "LM 스튜디오 기본 URL",
      autoDetect: "자동 감지",
      baseUrlHelper: "LM 스튜디오가 실행 중인 URL을 입력하세요.",
      modelSelectionLabel: "LM 스튜디오 임베딩 모델",
      loadingModels: "--사용 가능한 모델을 불러오는 중--",
      enterBaseUrl: "먼저 LM 스튜디오 URL을 입력하세요",
      modelSelectionHelper:
        "임베딩을 위한 LM 스튜디오 모델을 선택하세요. 유효한 LM 스튜디오 URL을 입력한 후 모델이 로드됩니다.",
      loadedModelsLabel: "로드된 모델",
    },
    cohereOptions: {
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "Cohere API 키",
      modelPrefLabel: "모델 선택",
      modelOptGroupLabel: "사용 가능한 임베딩 모델",
    },
    voyageAiOptions: {
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "Voyage AI API 키",
      modelPrefLabel: "모델 선택",
      modelOptGroupLabel: "사용 가능한 임베딩 모델",
    },
    liteLLMOptions: {
      baseUrlLabel: "기본 URL",
      baseUrlPlaceholder: "http://127.0.0.1:4000",
      chunkLengthLabel: "최대 임베딩 청크 길이",
      chunkLengthPlaceholder: "8192",
      apiKeyLabel: "API 키",
      optional: "선택 사항",
      apiKeyPlaceholder: "sk-내비밀키",
      modelSelectionLabel: "임베딩 모델 선택",
      loadingModels: "-- 사용 가능한 모델 로드 중 --",
      waitingForUrl: "-- URL을 기다리는 중 --",
      loadedModelsLabel: "로드된 모델",
      tooltipMessage:
        "유효한 임베딩 모델을 선택하십시오. 채팅 모델은 임베딩 모델이 아닙니다. 자세한 내용은",
      tooltipLinkText: "이 페이지",
      tooltipAdditionalInfo: "에서 확인하세요.",
    },
    genericOpenAiOptions: {
      baseUrlLabel: "기본 URL",
      baseUrlPlaceholder: "https://api.openai.com/v1",
      modelLabel: "임베딩 모델",
      modelPlaceholder: "text-embedding-ada-002",
      chunkLengthLabel: "최대 임베딩 청크 길이",
      chunkLengthPlaceholder: "8192",
      apiKeyLabel: "API 키",
      optional: "선택 사항",
      apiKeyPlaceholder: "sk-내비밀키",
    },
  },

  text: {
    title: "텍스트 분할 및 청킹 기본 설정",
    "desc-start":
      "새 문서를 벡터 데이터베이스에 삽입하기 전에 기본 텍스트 분할 방식을 변경할 수 있습니다.",
    "desc-end":
      "텍스트 분할 방식과 그 영향을 이해하고 있는 경우에만 이 설정을 변경해야 합니다.",
    "warn-start": "여기의 변경 사항은",
    "warn-center": "새로 임베딩되는 문서",
    "warn-end": "에만 적용됩니다. 기존 문서에는 적용되지 않습니다.",
    size: {
      title: "텍스트 청크 크기",
      description: "단일 벡터에 들어갈 수 있는 최대 문자 길이입니다.",
      placeholder: "벡터화된 텍스트의 최대 길이",
      recommend: "임베드 모델 최대 길이는",
    },
    overlap: {
      title: "텍스트 청크 겹침",
      description:
        "청킹 동안 두 인접 텍스트 청크 간에 겹칠 수 있는 최대 문자 수입니다.",
      placeholder: "최대 겹침 길이",
    },
    chunkOverlapError: "청크 겹침은 청크 크기보다 크거나 같을 수 없습니다.",
    saveSuccess: "텍스트 청킹 전략 설정이 저장되었습니다.",
  },

  // Vector Database
  vector: {
    title: "벡터 데이터베이스",
    description:
      "이것은 AnythingLLM 인스턴스가 벡터 데이터베이스 사용을 위한 인증 설정입니다. 이 키가 활성 상태이고 정확해야 합니다.",
    provider: {
      title: "벡터 데이터베이스 제공자",
      description: "LanceDB를 선택하면 설정이 필요 없습니다.",
      searchPlaceholder: "모든 벡터 데이터베이스 제공자 검색",
    },
    providers: {
      lancedb:
        "AnythingLLM과 동일한 인스턴스에서 실행되는 100% 로컬 벡터 DB입니다.",
      chroma:
        "오픈 소스 벡터 데이터베이스로 직접 호스팅하거나 클라우드에서 사용할 수 있습니다.",
      pinecone:
        "기업 사용 사례에 적합한 100% 클라우드 기반 벡터 데이터베이스입니다.",
      zilliz:
        "SOC 2 준수를 갖춘 엔터프라이즈용 클라우드 호스팅 벡터 데이터베이스입니다.",
      qdrant: "로컬 및 분산 클라우드용 오픈 소스 벡터 데이터베이스입니다.",
      weaviate:
        "로컬 및 클라우드에서 호스팅되는 멀티모달 오픈 소스 벡터 데이터베이스입니다.",
      milvus:
        "오픈 소스, 고도로 확장 가능하며 매우 빠른 벡터 데이터베이스입니다.",
      astra: "실제 GenAI 응용 프로그램을 위한 벡터 검색을 제공합니다.",
    },
    chromaDBOptions: {
      endpointLabel: "Chroma 엔드포인트",
      endpointPlaceholder: "http://localhost:8000",
      apiHeaderLabel: "API 헤더",
      apiHeaderPlaceholder: "X-Api-Key",
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "sk-myApiKeyToAccessMyChromaInstance",
    },
    pineconeDBOptions: {
      apiKeyLabel: "Pinecone DB API 키",
      apiKeyPlaceholder: "Pinecone API 키",
      indexNameLabel: "Pinecone 인덱스 이름",
      indexNamePlaceholder: "my-index",
    },
    zillizCloudOptions: {
      endpointLabel: "클러스터 엔드포인트",
      endpointPlaceholder: "https://sample.api.gcp-us-west1.zillizcloud.com",
      apiTokenLabel: "API 토큰",
      apiTokenPlaceholder: "Zilliz 클러스터 API 토큰",
    },
    qdrantDBOptions: {
      endpointLabel: "QDrant API 엔드포인트",
      endpointPlaceholder: "http://localhost:6633",
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "wOeqxsYP4....1244sba",
    },
    weaviateDBOptions: {
      endpointLabel: "Weaviate 엔드포인트",
      endpointPlaceholder: "http://localhost:8080",
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "sk-123Abcweaviate",
    },
    milvusDBOptions: {
      addressLabel: "Milvus DB 주소",
      addressPlaceholder: "http://localhost:19530",
      usernameLabel: "Milvus 사용자 이름",
      usernamePlaceholder: "사용자 이름",
      passwordLabel: "Milvus 비밀번호",
      passwordPlaceholder: "비밀번호",
    },
    astraDBOptions: {
      endpointLabel: "Astra DB 엔드포인트",
      endpointPlaceholder: "Astra DB API 엔드포인트",
      applicationTokenLabel: "Astra DB 애플리케이션 토큰",
      applicationTokenPlaceholder: "AstraCS:...",
    },
    changeWarning:
      "벡터 데이터베이스를 변경하면 이전에 임베딩된 문서와 향후 유사성 검색 결과가 무시됩니다. 각 워크스페이스에 다시 추가해야 합니다.",
  },

  //common
  common: {
    save: "저장",
    saving: "저장 중...",
    "workspaces-name": "워크스페이스 이름",
  },

  //stt
  stt: {
    title: "음성-텍스트 변환 기본 설정",
    description:
      "여기에서 AnythingLLM 경험에 사용할 텍스트 변환 및 음성-텍스트 변환 제공자를 지정할 수 있습니다. 기본적으로 브라우저의 내장 서비스를 사용하지만 다른 서비스를 사용할 수도 있습니다.",
    provider: "제공자",
    searchPlaceholder: "음성-텍스트 변환 제공자를 검색하십시오",
    error: "환경 설정을 저장하지 못했습니다: {{error}}",
    success: "음성-텍스트 변환 기본 설정이 성공적으로 저장되었습니다.",
    providers: {
      native: "브라우저의 내장 STT 서비스를 지원하는 경우 사용합니다.",
      nativeConfiguration: "이 제공자에 대한 추가 설정은 필요하지 않습니다.",
    },
  },

  //tts
  tts: {
    title: "음성 변환 기본 설정",
    description:
      "여기에서 AnythingLLM 경험에서 사용할 텍스트 음성 변환 제공자를 지정할 수 있습니다. 기본적으로 브라우저의 내장 지원을 사용하지만, 다른 서비스를 사용할 수도 있습니다.",
    provider: "제공자",
    searchPlaceholder: "음성 변환 제공자 검색",
    error: "환경 설정을 저장하지 못했습니다: {{error}}",
    success: "음성 변환 기본 설정이 성공적으로 저장되었습니다.",
    providers: {
      native: "브라우저의 내장 TTS 서비스를 사용합니다.",
      openai: "OpenAI의 음성 변환 서비스를 사용합니다.",
      elevenlabs: "ElevenLabs의 음성 변환 기술을 사용합니다.",
      nativeConfiguration: "이 제공자에 대한 추가 설정은 필요하지 않습니다.",
    },
    openai: {
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "OpenAI API 키",
      voiceModelLabel: "음성 모델",
    },
    elevenlabs: {
      apiKeyLabel: "API 키",
      apiKeyPlaceholder: "ElevenLabs API 키",
      modelSelection: "모델 선택",
      loading: "-- 사용 가능한 모델을 불러오는 중 --",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "임베드 가능한 채팅 위젯",
    description:
      "임베드 가능한 채팅 위젯은 하나의 워크스페이스에 연결된 공개용 채팅방입니다. 이를 통해 워크스페이스 설정이 적용된 채팅방을 일반인들에게 공개할 수 있습니다.",
    create: "임베드 생성",
    table: {
      workspace: "워크스페이스",
      chats: "보낸 채팅",
      Active: "활성 도메인",
    },
  },

  "embed-chats": {
    title: "임베드 채팅",
    description: "게시한 임베드에서의 모든 채팅과 메시지의 기록입니다.",
    table: {
      embed: "임베드",
      sender: "보낸 사람",
      message: "메시지",
      response: "응답",
      at: "보낸 시각",
    },
  },

  multi: {
    title: "다중 사용자 모드",
    description:
      "다중 사용자 모드를 활성화하여 인스턴스가 팀 사용을 지원하도록 설정합니다.",
    enable: {
      "is-enable": "다중 사용자 모드가 활성화되었습니다",
      enable: "다중 사용자 모드 활성화",
      description:
        "당신은 기본 관리자가 됩니다. 관리자로서 모든 신규 사용자 또는 관리자의 계정을 생성해야 합니다. 비밀번호를 잃어버리면 관리자만 비밀번호를 재설정할 수 있습니다.",
      username: "관리자 계정 사용자 이름",
      password: "관리자 계정 비밀번호",
    },
    password: {
      title: "비밀번호 보호",
      description:
        "AnythingLLM 인스턴스를 비밀번호로 보호하십시오. 이 비밀번호를 잊어버리면 복구 방법이 없으므로 반드시 저장하세요.",
    },
    instance: {
      title: "인스턴스 비밀번호 보호",
      description:
        "당신은 기본 관리자가 됩니다. 관리자로서 모든 신규 사용자 또는 관리자의 계정을 생성해야 합니다. 비밀번호를 잃어버리면 관리자만 비밀번호를 재설정할 수 있습니다.",
      password: "인스턴스 비밀번호",
    },
  },

  // Event Logs
  event: {
    title: "이벤트 로그",
    description:
      "모니터링을 위해 이 인스턴스에서 발생하는 모든 작업과 이벤트를 확인합니다.",
    clear: "이벤트 로그 지우기",
    table: {
      type: "이벤트 유형",
      user: "사용자",
      occurred: "발생 시각",
    },
    confirmReset:
      "모든 이벤트 로그를 지우시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    resetSuccess: "이벤트 로그가 성공적으로 삭제되었습니다.",
    resetFail: "로그 삭제 실패: {error}",
  },

  // Privacy & Data-Handling
  privacy: {
    title: "개인정보와 데이터 처리",
    description:
      "연결된 타사 제공자와 AnythingLLM이 데이터를 처리하는 방식을 구성합니다.",
    llm: "LLM 선택",
    embedding: "임베딩 기본 설정",
    vector: "벡터 데이터베이스",
    anonymous: "익명 원격 분석 활성화",
    info1:
      "모든 이벤트는 IP 주소를 기록하지 않으며 <b>식별 가능한</b> 콘텐츠, 설정, 채팅 또는 기타 비사용 기반 정보를 포함하지 않습니다. 수집된 이벤트 태그 목록을 보려면 <a href='https://github.com/search?q=repo%3AMintplex-Labs%2Fanything-llm%20.sendTelemetry(&type=code' target='_blank' class='underline text-blue-400'>여기에서 Github</a>를 확인하세요.",
    info2:
      "오픈 소스 프로젝트로서 우리는 귀하의 개인정보 보호 권리를 존중합니다. 우리는 AI와 문서를 비공개 및 안전하게 통합할 수 있는 최고의 솔루션을 제공하는 데 전념하고 있습니다. 텔레메트리를 끄기로 결정하셨다면, 저희에게 피드백과 의견을 보내주시길 바랍니다. <a href='mailto:team@mintplexlabs.com' class='underline text-blue-400' target='_blank'>team@mintplexlabs.com</a>.",
    enabledMessage: "익명 원격 분석이 활성화되었습니다.",
    disabledMessage: "익명 원격 분석이 비활성화되었습니다.",
  },

  //Data Handling & Privacy
  handlingPrivacy: {
    title: "데이터 처리 및 개인정보 보호",
    description:
      "귀하의 개인 데이터에 대해 투명성과 통제권을 제공하는 데 전념하고 있습니다.",
    setting: "이 설정은 언제든지 설정에서 재구성할 수 있습니다.",
    llmSelectionPrivacy: {
      openai: {
        name: "OpenAI",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 OpenAI에 표시됩니다.",
        ],
      },
      azure: {
        name: "Azure OpenAI",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "귀하의 텍스트 및 임베딩 텍스트는 OpenAI 또는 Microsoft에 표시되지 않습니다.",
        ],
      },
      anthropic: {
        name: "Anthropic",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 Anthropic에 표시됩니다.",
        ],
      },
      gemini: {
        name: "Google Gemini",
        description: [
          "귀하의 채팅은 익명화되어 훈련에 사용됩니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 Google에 표시됩니다.",
        ],
      },
      lmstudio: {
        name: "LMStudio",
        description: [
          "모델과 채팅은 LMStudio를 실행하는 서버에서만 액세스할 수 있습니다.",
        ],
      },
      localai: {
        name: "LocalAI",
        description: [
          "모델과 채팅은 LocalAI를 실행하는 서버에서만 액세스할 수 있습니다.",
        ],
      },
      ollama: {
        name: "Ollama",
        description: [
          "모델과 채팅은 Ollama 모델을 실행하는 기기에서만 액세스할 수 있습니다.",
        ],
      },
      native: {
        name: "Custom Llama Model",
        description: [
          "모델과 채팅은 이 AnythingLLM 인스턴스에서만 액세스할 수 있습니다.",
        ],
      },
      togetherai: {
        name: "TogetherAI",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 TogetherAI에 표시됩니다.",
        ],
      },
      mistral: {
        name: "Mistral",
        description: [
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 Mistral에 표시됩니다.",
        ],
      },
      huggingface: {
        name: "HuggingFace",
        description: [
          "응답에 사용된 프롬프트와 문서 텍스트는 귀하의 HuggingFace 관리 엔드포인트로 전송됩니다.",
        ],
      },
      perplexity: {
        name: "Perplexity AI",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 Perplexity AI에 표시됩니다.",
        ],
      },
      openrouter: {
        name: "OpenRouter",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 OpenRouter에 표시됩니다.",
        ],
      },
      groq: {
        name: "Groq",
        description: [
          "귀하의 채팅은 훈련에 사용되지 않습니다.",
          "응답 생성에 사용된 프롬프트와 문서 텍스트는 Groq에 표시됩니다.",
        ],
      },
      koboldcpp: {
        name: "KoboldCPP",
        description: [
          "모델과 채팅은 KoboldCPP를 실행하는 서버에서만 액세스할 수 있습니다.",
        ],
      },
      textgenwebui: {
        name: "Oobabooga Web UI",
        description: [
          "모델과 채팅은 Oobabooga 텍스트 생성 웹 UI를 실행하는 서버에서만 액세스할 수 있습니다.",
        ],
      },
      "generic-openai": {
        name: "Generic OpenAI compatible service",
        description: [
          "데이터는 귀하의 일반 엔드포인트 제공업체의 서비스 약관에 따라 공유됩니다.",
        ],
      },
      cohere: {
        name: "Cohere",
        description: [
          "데이터는 cohere.com의 서비스 약관 및 귀하의 지역 개인정보 보호법에 따라 공유됩니다.",
        ],
      },
      litellm: {
        name: "LiteLLM",
        description: [
          "모델과 채팅은 LiteLLM을 실행하는 서버에서만 액세스할 수 있습니다.",
        ],
      },
    },
    vectorDbPrivacy: {
      chroma: {
        name: "Chroma",
        description: [
          "벡터와 문서 텍스트는 Chroma 인스턴스에 저장됩니다.",
          "인스턴스 접근은 귀하가 관리합니다.",
        ],
      },
      pinecone: {
        name: "Pinecone",
        description: [
          "벡터와 문서 텍스트는 Pinecone의 서버에 저장됩니다.",
          "귀하의 데이터 접근은 Pinecone이 관리합니다.",
        ],
      },
      qdrant: {
        name: "Qdrant",
        description: [
          "벡터와 문서 텍스트는 귀하의 Qdrant 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
        ],
      },
      weaviate: {
        name: "Weaviate",
        description: [
          "벡터와 문서 텍스트는 귀하의 Weaviate 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
        ],
      },
      milvus: {
        name: "Milvus",
        description: [
          "벡터와 문서 텍스트는 귀하의 Milvus 인스턴스(클라우드 또는 자체 호스팅)에 저장됩니다.",
        ],
      },
      zilliz: {
        name: "Zilliz Cloud",
        description: [
          "벡터와 문서 텍스트는 귀하의 Zilliz 클라우드 클러스터에 저장됩니다.",
        ],
      },
      astra: {
        name: "AstraDB",
        description: [
          "벡터와 문서 텍스트는 귀하의 클라우드 AstraDB 데이터베이스에 저장됩니다.",
        ],
      },
      lancedb: {
        name: "LanceDB",
        description: [
          "벡터와 문서 텍스트는 이 AnythingLLM 인스턴스에 비공개로 저장됩니다.",
        ],
      },
    },
    embeddingEnginePrivacy: {
      native: {
        name: "AnythingLLM Embedder",
        description: [
          "문서 텍스트는 이 AnythingLLM 인스턴스에서 비공개로 임베딩됩니다.",
        ],
      },
      openai: {
        name: "OpenAI",
        description: [
          "문서 텍스트는 OpenAI 서버로 전송됩니다.",
          "문서는 훈련에 사용되지 않습니다.",
        ],
      },
      azure: {
        name: "Azure OpenAI",
        description: [
          "문서 텍스트는 Microsoft Azure 서비스로 전송됩니다.",
          "문서는 훈련에 사용되지 않습니다.",
        ],
      },
      localai: {
        name: "LocalAI",
        description: [
          "문서 텍스트는 LocalAI를 실행하는 서버에서 비공개로 임베딩됩니다.",
        ],
      },
      ollama: {
        name: "Ollama",
        description: [
          "문서 텍스트는 Ollama를 실행하는 서버에서 비공개로 임베딩됩니다.",
        ],
      },
      lmstudio: {
        name: "LMStudio",
        description: [
          "문서 텍스트는 LMStudio를 실행하는 서버에서 비공개로 임베딩됩니다.",
        ],
      },
      cohere: {
        name: "Cohere",
        description: [
          "데이터는 cohere.com의 서비스 약관 및 귀하의 지역 개인정보 보호법에 따라 공유됩니다.",
        ],
      },
      voyageai: {
        name: "Voyage AI",
        description: [
          "데이터는 voyageai.com의 서비스 약관에 따라 Voyage AI의 서버로 전송됩니다.",
        ],
      },
      litellm: {
        name: "LiteLLM",
        description: [
          "문서 텍스트는 LiteLLM을 실행하는 서버에서만 접근할 수 있으며, LiteLLM에 설정된 공급자에게만 전달됩니다.",
        ],
      },
      "generic-openai": {
        name: "Generic OpenAI compatible service",
        description: [
          "데이터는 귀하의 일반 엔드포인트 제공업체의 서비스 약관에 따라 공유됩니다.",
        ],
      },
    },
  },
  //language preference
  displayLanguage: {
    title: "언어 설정",
    description: "AnythingLLM의 UI에서 사용할 언어를 선택하세요.",
  },

  //supportEmail
  supportEmail: {
    title: "지원 이메일",
    description:
      "이 인스턴스에 로그인한 동안 사용자 메뉴에 표시될 지원 이메일 주소를 설정하세요.",
    clearButton: "지우기",
    saveButton: "저장",
    updateFailed: "지원 이메일을 업데이트하지 못했습니다: {{error}}",
    updateSuccess: "지원 이메일이 성공적으로 업데이트되었습니다.",
  },

  //customAppName
  customAppName: {
    title: "앱 이름 설정",
    description: "로그인 페이지에 표시될 앱 이름을 설정하세요.",
    placeholder: "AnythingLLM",
    clearButton: "지우기",
    saveButton: "저장",
    updateFailed: "앱 이름 업데이트 실패: {{error}}",
    updateSuccess: "앱 이름이 성공적으로 업데이트되었습니다.",
  },

  //Agentskills
  agentSkills: {
    "rag-memory": {
      title: "RAG & 장기 기억",
      description:
        "에이전트가 로컬 문서를 활용하여 쿼리에 응답하거나, 장기 기억 검색을 위해 특정 콘텐츠를 '기억'하도록 요청할 수 있습니다.",
    },
    "view-summarize": {
      title: "문서 보기 및 요약",
      description:
        "에이전트가 현재 임베디드된 작업 공간 파일의 내용을 나열하고 요약할 수 있습니다.",
    },
    "scrape-websites": {
      title: "웹사이트 스크래핑",
      description:
        "에이전트가 웹사이트를 방문하고 그 내용을 스크랩하도록 허용합니다.",
    },
    "save-file-to-browser": {
      title: "파일 생성 및 브라우저에 저장",
      description:
        "기본 에이전트가 파일을 생성하고 컴퓨터에 저장할 수 있도록 허용합니다.",
      skill: "save-file-to-browser",
    },
    "create-chart": {
      title: "차트 생성",
      description:
        "기본 에이전트가 제공된 데이터 또는 채팅에서 받은 데이터를 바탕으로 다양한 차트를 생성할 수 있도록 허용합니다.",
      skill: "create-chart",
    },
    "web-browsing": {
      title: "웹 검색",
      skill: "web-browsing",
    },
    "sql-agent": {
      title: "SQL 커넥터",
      skill: "sql-agent",
    },
    saveFailed: "에이전트 설정 저장에 실패했습니다.",
    saveSuccess: "에이전트 설정이 성공적으로 저장되었습니다.",
    title: "에이전트 스킬",
    description: "에이전트 스킬을 선택하세요",
    default: "기본",
  },

  //contextSaveBar
  contextSaveBar: {
    unsaved: "저장되지 않은 변경 사항",
    cancel: "취소",
    save: "저장",
  },

  //agentDbConnection
  agentDbConnection: {
    title: "SQL 에이전트",
    confirmDelete:
      "{{database_id}}을(를) 사용 가능한 SQL 연결 목록에서 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
    description:
      "에이전트가 다양한 SQL 데이터베이스 제공자에 연결하여 질문에 답변할 수 있도록 SQL을 활용할 수 있게 합니다.",
    connection: "데이터베이스 연결 목록",
    add: "새 SQL 연결",
    fillOutFields: "모든 필드를 작성해 주세요.",
    addDescription:
      "아래에 데이터베이스 연결 정보를 추가하면, 이후 SQL 에이전트 호출 시 사용할 수 있습니다.",
    warningMessage: `
    <b>경고:</b> SQL 에이전트는 <i>비수정</i> 쿼리만 수행하도록 설정되었습니다. 
    하지만 이 설정은 예기치 않은 동작으로 인해 데이터가 삭제되는 것을 <b>방지하지 못합니다</b>. 
    반드시 <b>READ_ONLY</b> 권한이 있는 사용자로만 연결하세요.
  `,
    selectEngine: "SQL 엔진 선택",
    connectionName: "연결 이름",
    namePlaceholder: "이 SQL 연결을 식별할 고유 이름",
    username: "데이터베이스 사용자",
    password: "데이터베이스 비밀번호",
    host: "서버 엔드포인트",
    hostPlaceholder: "데이터베이스의 호스트 이름 또는 엔드포인트",
    port: "포트",
    database: "데이터베이스",
    databasePlaceholder: "에이전트가 상호작용할 데이터베이스",
    cancel: "취소",
    saveConnection: "연결 저장",
  },

  //searchProvidesOption
  searchProviders: {
    none: {
      name: "선택해 주세요",
      description: "웹 검색이 제공자와 키가 설정될 때까지 비활성화됩니다.",
    },
    googleSearch: {
      name: "구글 검색 엔진",
      description:
        "사용자 지정 구글 검색 엔진을 통한 웹 검색. 하루 100회 무료 검색 가능.",
    },
    serperDotDev: {
      name: "Serper.dev",
      description: "Serper.dev 웹 검색. 2,500회 무료 사용, 이후 유료 전환.",
    },
    bingSearch: {
      name: "빙 검색",
      description:
        "빙 검색 API로 구동되는 웹 검색. 한 달에 1,000회 무료 검색 가능.",
    },
    serply: {
      name: "Serply.io",
      description: "Serply.io 웹 검색. 월 100회 무료 검색 제공.",
    },
    searxng: {
      name: "SearXNG",
      description:
        "개인 정보 추적 없이 사용할 수 있는 무료 오픈 소스 메타 검색 엔진.",
    },
    title: "실시간 웹 검색 및 탐색",
    description:
      " 에이전트가 웹 검색 엔진(SERP)과 연결되어 웹에서 정보를 검색하고 질문에 답할 수 있도록 설정하세요. 이 설정을 완료하지 않으면 에이전트가 웹 검색을 수행할 수 없습니다.",
    searchPlaceholder: "사용 가능한 웹 검색 제공자를 검색하세요",
  },
  //searchProvidesOption
  searchProvidesOption: {
    googleSearch: {
      description:
        '무료 검색 엔진과 API 키를 <a href="https://programmablesearchengine.google.com/controlpanel/create" target="_blank" rel="noreferrer" class="text-blue-300 underline">여기에서 구글로부터 받을 수 있습니다.</a>',
      searchEngineId: "검색 엔진 ID",
      apiKey: "프로그래매틱 액세스 API 키",
      placeholderEngineId: "구글 검색 엔진 ID",
      placeholderApiKey: "구글 검색 엔진 API 키",
    },
    serperDotDev: {
      description:
        '무료 API 키를 <a href="https://serper.dev" target="_blank" rel="noreferrer" class="text-blue-300 underline">Serper.dev에서 받을 수 있습니다.</a>',
      apiKey: "API 키",
      placeholderApiKey: "Serper.dev API 키",
    },
    bingSearch: {
      description:
        'Bing 웹 검색 API 구독 키를 <a href="https://portal.azure.com/" target="_blank" rel="noreferrer" class="text-blue-300 underline">Azure 포털에서 받을 수 있습니다.</a>',
      apiKey: "API 키",
      placeholderApiKey: "Bing 웹 검색 API 키",
      setupDescription: "Bing 웹 검색 API 구독 설정 방법:",
      steps: {
        step1:
          'Azure 포털로 이동: <a href="https://portal.azure.com/" target="_blank" rel="noreferrer" class="text-blue-300 underline">https://portal.azure.com/</a>',
        step2: "새로운 Azure 계정을 만들거나 기존 계정으로 로그인하세요.",
        step3: '"리소스 생성" 섹션으로 이동하여 "Bing Search v7"을 검색하세요.',
        step4: '"Bing Search v7" 리소스를 선택하고 새 구독을 만드세요.',
        step5: "필요한 요금제를 선택하세요 (무료 요금제 사용 가능).",
        step6: "Bing 웹 검색 구독에 대한 API 키를 받으세요.",
      },
    },
    serply: {
      description:
        '무료 API 키를 <a href="https://serply.io" target="_blank" rel="noreferrer" class="text-blue-300 underline">Serply.io에서 받을 수 있습니다.</a>',
      apiKey: "API 키",
      placeholderApiKey: "Serply API 키",
    },
    searxng: {
      baseUrl: "SearXNG API 기본 URL",
      placeholderUrl: "SearXNG API 키",
    },
  },

  //footer
  footer: {
    githubAriaLabel: "Github에서 찾기",
    githubTooltip: "Github에서 소스 코드 보기",
    docsAriaLabel: "문서",
    docsTooltip: "AnythingLLM 도움말 문서 열기",
    discordAriaLabel: "Discord 서버에 참여하기",
    discordTooltip: "AnythingLLM Discord에 참여",
    homeAriaLabel: "홈으로 돌아가기",
    homeTooltip: "워크스페이스로 돌아가기",
    settingsAriaLabel: "설정 열기",
    settingsTooltip: "설정 열기",
  },
  //agentConfig
  agentConfig: {
    title: "에이전트 스킬 설정",
    description:
      " 기본 에이전트의 기능을 사용자 지정하고 확장하려면 특정 스킬을 활성화하거나 비활성화하세요. 이 설정은 모든 워크스페이스에 적용됩니다.",
  },

  //members
  members: {
    userName: "사용자 이름",
    role: "역할",
    dateAdd: "추가된 날짜",
    workspace: "워크스페이스 구성원이 없습니다",
    manageUsers: "사용자 관리",
  },

  //newEmbadedModel
  newEmbadedModel: {
    createNewEmbed: "워크스페이스에 새 임베드 생성",
    errorMessage: "오류: {error}",
    cancel: "취소",
    createEmbed: "임베드 생성",
    workspaceLabel: "워크스페이스",
    workspaceDescription:
      "이 채팅 창은 선택한 워크스페이스를 기반으로 작동합니다. 기본 설정은 워크스페이스에서 상속되며, 이 설정으로 재정의할 수 있습니다.",
    allowedChatMethod: "허용된 채팅 방식",
    allowedChatMethodDescription:
      "챗봇이 작동할 방식을 설정하세요. '쿼리'는 문서가 질문에 답변을 제공하는 경우에만 응답합니다.<br />'채팅'은 일반적인 질문에도 응답하며, 워크스페이스와 관련 없는 질문에도 답변할 수 있습니다.",
    chatOption: "채팅: 컨텍스트와 상관없이 모든 질문에 응답",
    queryOption: "쿼리: 워크스페이스 내 문서와 관련된 질문에만 응답",
    restrictRequestsFromDomains: "도메인 요청 제한",
    restrictRequestsDescription:
      "이 필터는 아래 목록에 있는 도메인 이외의 요청을 차단합니다.",
    restrictRequestsLeavingEmpty:
      "이 필드를 비워두면 누구나 임베드를 사용할 수 있습니다.",
    maxChatsPerDay: "일일 최대 채팅 수",
    maxChatsPerDayHint:
      "이 임베드된 채팅이 하루 동안 처리할 수 있는 최대 채팅 수를 설정합니다. 0으로 설정하면 무제한입니다.",
    maxChatsPerSession: "세션당 최대 채팅 수",
    maxChatsPerSessionHint:
      "사용자가 이 임베드를 통해 한 세션에서 보낼 수 있는 최대 채팅 수를 설정합니다. 0으로 설정하면 무제한입니다.",
    enableDynamicModelUse: "동적 모델 사용 허용",
    enableDynamicModelUseHint:
      "워크스페이스 기본값 대신 선호하는 LLM 모델을 설정할 수 있도록 허용합니다.",
    enableDynamicLLMTemperature: "동적 LLM 온도 설정 허용",
    enableDynamicLLMTemperatureHint:
      "워크스페이스 기본값 대신 LLM 온도를 조정할 수 있도록 허용합니다.",
    enablePromptOverride: "프롬프트 재정의 허용",
    enablePromptOverrideHint:
      "워크스페이스 기본값 대신 시스템 프롬프트를 설정할 수 있도록 허용합니다.",
    embedCreationHint:
      "임베드를 생성한 후에는 간단한 {} 태그를 통해 웹사이트에 링크를 게시할 수 있습니다.",
  },

  //CodeSnippetModal
  copyEmbedCode: {
    title: "임베드 코드를 복사하세요",
    closeButton: "닫기",
    htmlScriptTagLabel: "HTML 스크립트 태그 임베드 코드",
    description:
      "워크스페이스 채팅 임베드를 웹사이트 하단 구석에 헬프 데스크 채팅처럼 표시되도록 설정하세요.",
    viewOptions: "모든 스타일 및 설정 옵션 보기 &rarr;",
  },

  //embedeRow
  embedMessages: {
    confirmDisable:
      "이 임베드를 비활성화하시겠습니까?\n비활성화되면 임베드는 더 이상 채팅 요청에 응답하지 않습니다.",
    confirmDelete:
      "이 임베드를 삭제하시겠습니까?\n삭제되면 이 임베드는 더 이상 채팅에 응답하지 않거나 활성화되지 않습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    embedDisabled: "임베드가 비활성화되었습니다.",
    embedActive: "임베드가 활성화되었습니다.",
    embedDeleted: "시스템에서 임베드가 삭제되었습니다.",
    showCode: "코드 보기",
    disable: "비활성화",
    enable: "활성화",
    delete: "삭제",
    all: "전체",
  },
  //editEmbedModal
  editEmbedModal: {
    title: "임베드 수정",
    updateSuccessMessage: "임베드가 성공적으로 수정되었습니다.",
    errorMessage: "오류: {error}",
    maxChatsPerDay: "일일 최대 채팅 수",
    maxChatsPerDayHint:
      "이 임베드된 채팅이 하루 동안 처리할 수 있는 최대 채팅 수를 설정합니다. 0으로 설정하면 무제한입니다.",
    maxChatsPerSession: "세션당 최대 채팅 수",
    maxChatsPerSessionHint:
      "사용자가 이 임베드를 통해 한 세션에서 보낼 수 있는 최대 채팅 수를 설정합니다. 0으로 설정하면 무제한입니다.",
    enableDynamicModelUse: "동적 모델 사용 허용",
    enableDynamicModelUseHint:
      "워크스페이스 기본값 대신 선호하는 LLM 모델을 설정할 수 있도록 허용합니다.",
    enableDynamicLLMTemperature: "동적 LLM 온도 설정 허용",
    enableDynamicLLMTemperatureHint:
      "워크스페이스 기본값 대신 LLM 온도를 조정할 수 있도록 허용합니다.",
    enablePromptOverride: "프롬프트 재정의 허용",
    enablePromptOverrideHint:
      "워크스페이스 기본값 대신 시스템 프롬프트를 설정할 수 있도록 허용합니다.",
    embedCreationHint:
      "임베드를 생성한 후에는 간단한 {} 태그를 통해 웹사이트에 링크를 게시할 수 있습니다.",
    cancelButton: "취소",
    updateButton: "임베드 수정",
  },

  //newApiKeyModal
  newApiKeyModal: {
    title: "새 API 키 생성",
    errorMessage: "오류: {error}",
    apiKeyDescription:
      "API 키가 생성된 후, 이를 사용하여 이 AnythingLLM 인스턴스를 프로그래밍적으로 접근하고 구성할 수 있습니다.",
    apiDocsLink: "API 문서 읽기 ",
    cancelButton: "취소",
    createButton: "API 키 생성",
    copyButton: "API 키 복사",
    copiedButton: "API 키 복사됨",
  },

  apiKeyActions: {
    confirmDeactivate:
      "이 API 키를 비활성화하시겠습니까?\n이 작업을 수행하면 더 이상 사용할 수 없습니다.\n\n이 작업은 되돌릴 수 없습니다.",
    deleteSuccess: "API 키가 영구적으로 삭제되었습니다",
    copySuccess: "API 키가 클립보드에 복사되었습니다",
    copied: "복사됨",
    copy: "API 키 복사",
  },

  liveSyncToggle: {
    title: "자동 문서 콘텐츠 동기화",
    description1:
      '문서를 "감시" 대상으로 지정할 수 있는 기능을 활성화합니다. 감시된 문서의 콘텐츠는 정기적으로 가져와서 AnythingLLM에서 업데이트됩니다.',
    description2:
      "감시된 문서는 업데이트 시 참조된 모든 워크스페이스에서 자동으로 업데이트됩니다.",
    descriptionNote:
      "이 기능은 웹 기반 콘텐츠에만 적용됩니다. 예: 웹사이트, Confluence, YouTube, GitHub 파일.",
    featureDocumentation: "기능 설명서 및 경고",
    manageWatchedDocuments: "감시 문서 관리",
    toastMessage: {
      failed: "기능 상태를 업데이트하는 데 실패했습니다.",
      enabled: "실시간 문서 콘텐츠 동기화가 활성화되었습니다.",
      disabled: "실시간 문서 콘텐츠 동기화가 비활성화되었습니다.",
    },
  },
  liveDocumentSyncManager: {
    pageTitle: "감시 중인 문서",
    pageDescription:
      "현재 인스턴스에서 감시 중인 모든 문서입니다. 이러한 문서의 콘텐츠는 주기적으로 동기화됩니다.",
    tableHeaders: {
      documentName: "문서 이름",
      lastSynced: "마지막 동기화 시간",
      timeUntilNextRefresh: "다음 갱신까지 남은 시간",
      createdOn: "생성일",
    },
  },
  experimentalFeatures: {
    title: "실험적 기능",
    selectFeaturePrompt: "실험적 기능을 선택하세요",
    featureList: {
      liveDocumentSync: "실시간 문서 동기화",
      on: "켜짐",
      off: "꺼짐",
    },
    featureVerification: {
      title: "실험적 기능 이용 약관",
      description:
        "AnythingLLM의 실험 기능은 우리가 파일럿 중인 기능이며 <b>선택적 참여</b>가 가능합니다. 기능 승인 전에 발생할 수 있는 문제에 대해 미리 경고하거나 조건을 제시할 것입니다.",
      useWarning: {
        title:
          "이 페이지의 기능을 사용할 경우 발생할 수 있는 가능성(예시)에 대해 경고합니다:",
        warnings:
          "<li>데이터 손실.</li><li>결과 품질 변화.</li><li>저장 공간 증가.</li><li>리소스 소비 증가.</li><li>연결된 LLM 또는 임베딩 제공자의 비용 또는 사용량 증가.</li><li>AnythingLLM 사용 시 잠재적인 버그 또는 문제.</li>",
      },
      conditions: {
        title:
          "실험 기능을 사용할 때 다음과 같은 조건이 있을 수 있습니다(비한정):",
        warnings:
          "<li>기능이 향후 업데이트에서 제공되지 않을 수 있습니다.</li><li>현재 기능은 안정적이지 않습니다.</li><li>이 기능은 향후 버전, 구성 또는 구독에서 사용할 수 없을 수 있습니다.</li><li>모든 베타 기능 사용 시 개인정보 보호 설정이 <b>준수됩니다</b>.</li><li>이 조건은 향후 업데이트에서 변경될 수 있습니다.</li>",
      },
      accessInfo:
        "모든 기능에 대한 접근은 이 모달의 승인이 필요합니다. 자세한 내용을 보려면 <a href='https://docs.useanything.com/beta-preview/overview' class='underline text-blue-500'>docs.useanything.com</a>을 참조하거나 <a href='mailto:team@mintplexlabs.com' class='underline text-blue-500'>team@mintplexlabs.com</a>으로 이메일을 보내주세요.",
      buttons: {
        reject: "거부 및 닫기",
        accept: "동의합니다",
      },
    },
  },

  //warning
  modal: {
    warning: {
      title: "경고",
      confirmQuestion: "계속 진행하시겠습니까?",
      cancelButton: "취소",
      confirmButton: "확인",
    },
    chatRow: {
      deleteConfirm: "이 채팅을 삭제하시겠습니까?",
      deleteWarning: "이 작업은 되돌릴 수 없습니다.",
      viewingPrompt: "프롬프트 보기",
      viewingResponse: "응답 보기",
    },
    newUser: {
      title: "새 계정 만들기",
      username: "사용자 이름",
      usernamePlaceholder: "내 사용자 이름",
      password: "비밀번호",
      passwordPlaceholder: "비밀번호를 입력하세요",
      error: "오류",
      infoText:
        "계정을 생성한 후에는 이 자격 증명으로 로그인하여 워크스페이스를 사용할 수 있습니다.",
      acceptButton: "초대 수락",
    },
  },

  //Invite
  invitePage: {
    noInviteCode: "초대 코드가 제공되지 않았습니다.",
    invalidInvite: "초대가 유효하지 않거나 만료되었습니다.",
  },

  //survey
  survey: {
    title: "AnythingLLM에 오신 것을 환영합니다",
    description:
      "AnythingLLM을 귀하의 요구에 맞게 만들 수 있도록 도와주세요. 선택 사항입니다.",
    thankYouMessage: "피드백에 감사드립니다!",
    emailLabel: "이메일을 알려주세요.",
    emailPlaceholder: "you@gmail.com",
    useCaseLabel: "AnythingLLM을 무엇에 사용하시겠습니까?",
    useCaseOptions: {
      job: "업무용",
      personal: "개인 용도",
      other: "기타",
    },
    commentLabel: "팀에게 남길 말씀이 있나요?",
    optional: "(선택 사항)",
    commentPlaceholder:
      "질문이나 의견이 있다면 여기 남겨주세요. team@mintplexlabs.com으로 이메일을 보내실 수도 있습니다.",
    skip: "설문 건너뛰기",
  },

  //usersetup
  userSetup: {
    title: "사용자 설정",
    description: "사용자 설정을 구성하세요.",
    instanceQuestion: "이 인스턴스를 사용할 사람은 몇 명인가요?",
    justMe: "나만 사용",
    myTeam: "팀 사용",
    passwordQuestion: "비밀번호를 설정하시겠습니까?",
    yes: "네",
    no: "아니요",
    passwordLabel: "인스턴스 비밀번호",
    passwordPlaceholder: "관리자 비밀번호 입력",
    passwordRequirements:
      "비밀번호는 최소 8자 이상이어야 합니다. 비밀번호를 꼭 저장하세요, 복구 방법이 없습니다.",
    passwordError: "비밀번호 설정에 실패했습니다: {{error}}",
    multiUserUsername: "관리자 계정 사용자 이름",
    multiUserPassword: "관리자 계정 비밀번호",
    usernamePlaceholder: "관리자 사용자 이름",
    multiUserError: "오류 발생: {{error}}",
    adminWarning:
      "기본적으로 당신만 관리자입니다. 온보딩이 완료되면 다른 사용자나 관리자를 생성하고 초대할 수 있습니다. 관리자만 비밀번호를 재설정할 수 있으므로 비밀번호를 잃어버리지 않도록 주의하세요.",
  },
  //workspacesetting
  workspaceLLM: {
    setupTitle: "{{name}} 설정",
    setupInstruction:
      "{{name}}를 이 워크스페이스의 LLM으로 사용하려면 먼저 설정이 필요합니다.",
    saveError: "{{name}} 설정 저장 실패: {{error}}",
    cancel: "취소",
    save: "{{name}} 설정 저장",
  },
  //Home
  onboarding: {
    welcome: "환영합니다",
    getStarted: "시작하기",
  },
  confluenceOptions: {
    fetching:
      "Confluence 공간의 모든 페이지를 가져오는 중입니다 - 시간이 걸릴 수 있습니다.",
    pagesCollected:
      "Confluence 공간 {{spaceKey}}에서 페이지를 가져왔습니다. 출력 폴더는 {{destination}}입니다.",
    pageUrlLabel: "Confluence 페이지 URL",
    pageUrlDescription: "Confluence 공간의 페이지 URL입니다.",
    usernameLabel: "Confluence 사용자 이름",
    usernameDescription: "Confluence 사용자 이름을 입력하세요.",
    accessTokenLabel: "Confluence 액세스 토큰",
    accessTokenDescription: "인증을 위한 액세스 토큰입니다.",
    accessTokenTooltip:
      "인증을 위해 액세스 토큰을 제공해야 합니다. 액세스 토큰은",
    accessTokenLink: "여기",
    collecting: "페이지를 수집 중...",
    submit: "제출",
    loadingMessage:
      "완료되면 모든 페이지를 워크스페이스에 임베드할 수 있습니다.",
  },
  githubOptions: {
    fetching: "레포의 모든 파일을 가져오는 중입니다 - 시간이 걸릴 수 있습니다.",
    filesCollected:
      "{{author}}/{{repo}}:{{branch}}에서 {{files}}개의 파일을 가져왔습니다. 출력 폴더는 {{destination}}입니다.",
    repoUrlLabel: "GitHub 레포 URL",
    repoUrlDescription: "가져오려는 GitHub 레포의 URL입니다.",
    accessTokenLabel: "GitHub 액세스 토큰",
    accessTokenDescription: "속도 제한을 방지하기 위한 액세스 토큰입니다.",
    optional: "선택 사항",
    fileIgnoresLabel: "파일 무시 목록",
    fileIgnoresDescription:
      ".gitignore 형식으로 특정 파일을 무시합니다. 저장하려는 항목을 입력한 후 Enter 키를 누르세요.",
    fileIgnoresPlaceholder: "!*.js, images/*, .DS_Store, bin/*",
    collectingFiles: "파일을 수집 중...",
    submit: "제출",
    loadingMessage:
      "완료되면 문서 선택기에서 모든 파일을 워크스페이스에 임베드할 수 있습니다.",
  },
  websiteDepth: {
    scraping: "웹사이트 스크래핑 중 - 시간이 걸릴 수 있습니다.",
    scrapedPages: "{{count}}개의 페이지를 성공적으로 스크래핑했습니다!",
    urlLabel: "웹사이트 URL",
    urlDescription: "스크래핑하려는 웹사이트의 URL입니다.",
    depthLabel: "깊이",
    depthDescription: "시작 URL에서 몇 개의 하위 링크를 따라갈지 설정합니다.",
    maxLinksLabel: "최대 링크 수",
    maxLinksDescription: "스크래핑할 최대 링크 수입니다.",
    scrapingButton: "웹사이트 스크래핑 중...",
    submitButton: "제출",
    loadingMessage:
      "완료되면 모든 스크래핑된 페이지를 문서 선택기에서 워크스페이스에 임베드할 수 있습니다.",
  },
  //sidebar
  thread: {
    deleted: "삭제된 스레드",
    rename: "이름 변경",
    delete: "스레드 삭제",
    options: "스레드 옵션",
    renamePrompt: "이 스레드의 이름을 무엇으로 변경하시겠습니까?",
    renameError: "스레드를 업데이트할 수 없습니다! {{message}}",
    deleteConfirm:
      "이 스레드를 삭제하시겠습니까? 이 스레드의 모든 채팅이 삭제됩니다. 이 작업은 되돌릴 수 없습니다.",
    deleteError: "스레드를 삭제할 수 없습니다!",
    deleteSuccess: "스레드가 성공적으로 삭제되었습니다!",
  },

  account: {
    editTitle: "계정 수정",
    profilePicture: "프로필 사진",
    profilePictureAlt: "사용자 프로필 사진",
    removeProfilePicture: "프로필 사진 제거",
    username: "사용자 이름",
    usernamePlaceholder: "사용자의 사용자 이름",
    newPassword: "새 비밀번호",
    passwordPlaceholder: "{{username}}의 새 비밀번호",
    preferredLanguage: "선호 언어",
    cancel: "취소",
    updateAccount: "계정 업데이트",
    updateSuccess: "프로필이 업데이트되었습니다.",
    updateError: "사용자 업데이트 실패: {{error}}",
    uploadError: "프로필 사진 업로드 실패: {{error}}",
    uploadSuccess: "프로필 사진이 업로드되었습니다.",
    removeError: "프로필 사진 제거 실패: {{error}}",
    removeSuccess: "프로필 사진이 성공적으로 제거되었습니다.",
  },
  citations: {
    show: "인용 표시",
    hide: "인용 숨기기",
    referenced: "{{count}}번 참조됨.",
    match: "일치",
    similarityExplanation:
      "이것은 벡터 데이터베이스에 의해 계산된 쿼리와 이 텍스트 조각의 의미적 유사도 점수입니다.",
  },
  actionMenu: {
    tooltip: "추가 작업",
    fork: "분기",
    delete: "삭제",
  },
  deleteMessage: {
    delete: "삭제",
  },
  editMessage: {
    actionTooltip: "{{action}} 편집",
    prompt: "프롬프트",
    response: "응답",
    saveButton: "저장 및 제출",
    cancelButton: "취소",
  },
  promptReply: {
    error: "메시지에 응답할 수 없습니다.",
    reason: "이유: {{error}}",
    unknown: "알 수 없음",
    workspaceAlt: "워크스페이스 프로필 사진",
  },
  endAgentSession: {
    haltSession: "현재 에이전트 세션을 중단합니다.",
  },
  addPresetModal: {
    title: "새 프리셋 추가",
    command: "명령어",
    commandPlaceholder: "명령어 입력",
    prompt: "프롬프트",
    promptPlaceholder: "프롬프트 앞에 삽입될 내용을 여기에 입력하세요.",
    description: "설명",
    descriptionPlaceholder: "LLM에 관한 시를 응답합니다.",
    cancel: "취소",
    save: "저장",
  },
  editPresetModal: {
    title: "프리셋 편집",
    command: "명령어",
    commandPlaceholder: "명령어 입력",
    prompt: "프롬프트",
    promptPlaceholder: "테스트 프롬프트입니다. LLM에 관한 시로 응답해 주세요.",
    description: "설명",
    descriptionPlaceholder: "LLM에 관한 시로 응답합니다.",
    confirmDelete: "이 프리셋을 삭제하시겠습니까?",
    deleting: "삭제 중...",
    delete: "프리셋 삭제",
    cancel: "취소",
    save: "저장",
  },
  slashPresets: {
    addNewPreset: "새 프리셋 추가",
  },
  resetCommand: {
    description: "채팅 기록을 지우고 새 채팅을 시작하세요",
  },
  workspaceChat: {
    notFound: {
      title: "워크스페이스를 찾을 수 없습니다!",
      message: "이 이름의 워크스페이스를 찾을 수 없는 것 같습니다.",
      backButton: "홈페이지로 돌아가기",
    },
    copiedMessage: "복사 완료!",
  },
  logRow: {
    hide: "숨기기",
    show: "보기",
    eventMetadata: "이벤트 메타데이터",
    events: {
      login_event: "로그인 이벤트",
      update: "업데이트",
      failed_: "실패",
      deleted: "삭제됨",
    },
  },
};
export default TRANSLATIONS;
