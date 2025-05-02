import React from 'react';
 
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError() {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de respaldo.
    return { hasError: true };
  }
 
  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de informe de errores aquí
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }
 
  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de respaldo personalizada
      return <h1>Algo salió mal.</h1>;
    } //poner componente de error personalizado
 
    return this.props.children;
  }
}
 
export default ErrorBoundary;