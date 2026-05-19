

flowchart LR
  subgraph Edge
    Users["Users / Clients"]
    FD["Azure Front Door / CDN / WAF"]
  end

  subgraph FrontendLayer
    Static["Static Frontend\n(Azure Static Web Apps / Blob + CDN)"]
  end

  subgraph Gateway
    APIGW["API Gateway / APIM\nor Application Gateway"]
    LB["Load Balancer / Ingress"]
  end

  subgraph Compute
    Backend["Node.js Backend\n(Containers — AKS or App Service)"]
    ACR["Azure Container Registry (ACR)"]
  end

  subgraph Data
    DB["Azure SQL / Cosmos DB"]
    Redis["Azure Cache for Redis"]
    Blob["Azure Blob Storage"]
    KV["Azure Key Vault"]
  end

  subgraph Observability
    AppInsights["Application Insights"]
    LogAnalytics["Log Analytics"]
  end

  subgraph CI_CD
    GH["GitHub (repo)"]
    Actions["GitHub Actions\n(build/test/push)"]
    Infra["IaC (Bicep/Terraform)"]
  end

  Users --> FD
  FD --> Static
  FD --> APIGW
  APIGW --> LB
  LB --> Backend

  Backend --> DB
  Backend --> Redis
  Backend --> Blob
  Backend --> KV

  Backend --> AppInsights
  FD --> AppInsights
  DB --> AppInsights
  AppInsights --> LogAnalytics

  GH --> Actions
  Actions -->|build image| ACR
  Actions -->|deploy| Backend
  Actions -->|run IaC| Infra
  Infra -->|provisions| DB
  Infra -->|provisions| Backend
  Infra -->|provisions| KV

  %% Networking / Security
  DB -. private endpoints .-> Backend
  KV -. private endpoints .-> Backend

  %% Deployment patterns
  ACR -->|image pull| Backend
