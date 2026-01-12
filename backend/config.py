import os
from pathlib import Path

# Security
SECRET_KEY = os.getenv("SECRET_KEY", "credocarbon-superadmin-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours

# Admin credentials (in production, use environment variables or database)
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "superadmin")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "CredoCarbon@2025")

# Paths
BACKEND_DIR = Path(__file__).parent
PROJECT_ROOT = BACKEND_DIR.parent
PUBLIC_DATA_DIR = PROJECT_ROOT / "public" / "Data"

# CORS
ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "https://credocarbon.com",
    "https://www.credocarbon.com",
]
