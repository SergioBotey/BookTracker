# Architecture Decisions

## ADR 001 — Arquitectura por capas en backend

### Decisión

El backend se organizará en capas:

- BookTracker.Api
- BookTracker.Application
- BookTracker.Domain
- BookTracker.Infrastructure

### Motivo

Esta estructura permite separar responsabilidades, mejorar mantenibilidad y facilitar testing.

## ADR 002 — PostgreSQL como base de datos inicial

### Decisión

Se usará PostgreSQL como base de datos relacional inicial.

### Motivo

PostgreSQL es una opción sólida, gratuita, compatible con Docker y fácil de desplegar en servicios como Neon, Supabase, Render o Azure.

## ADR 003 — React + TypeScript para frontend

### Decisión

El frontend se construirá con React y TypeScript.

### Motivo

React permite crear una interfaz dinámica y modular. TypeScript mejora la seguridad del código y reduce errores en desarrollo.

## ADR 004 — JWT para autenticación

### Decisión

Se usará JWT para autenticación.

### Motivo

JWT permite manejar autenticación stateless entre frontend y backend separados.